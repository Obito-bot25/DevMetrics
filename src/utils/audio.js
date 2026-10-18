// Web Audio API Synthesizer: Zero external audio files, pure browser synthesis

let audioCtx = null;
let isMuted = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function setMuted(muted) {
  isMuted = muted;
}

export function getMuted() {
  return isMuted;
}

// Short technical radar / calculation chirp
export function playBlip() {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (err) {
    console.debug('Audio blip suppressed:', err);
  }
}

// Dramatic, slightly ridiculous brass fanfare for the Cuck Coder reveal
export function playDramaticFanfare() {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Dramatic punch notes: Ta-da-da-DAAA!
    const notes = [
      { freq: 261.63, start: 0.0, dur: 0.15 }, // C4
      { freq: 329.63, start: 0.15, dur: 0.15 }, // E4
      { freq: 392.0, start: 0.30, dur: 0.20 }, // G4
      { freq: 523.25, start: 0.55, dur: 0.90 }, // C5 (triumphant brass chord)
    ];

    notes.forEach(({ freq, start, dur }) => {
      // Primary saw wave for brassy bite
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(freq, now + start);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 1.002, now + start); // slight chorus detune

      const startTime = now + start;
      const endTime = startTime + dur;

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.12, startTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, endTime);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(startTime);
      osc1.stop(endTime);
      osc2.start(startTime);
      osc2.stop(endTime);
    });

    // Sub-bass hit for dramatic punch
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(110, now + 0.55);
    subOsc.frequency.exponentialRampToValueAtTime(45, now + 1.2);
    subGain.gain.setValueAtTime(0.2, now + 0.55);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
    subOsc.connect(subGain);
    subGain.connect(ctx.destination);
    subOsc.start(now + 0.55);
    subOsc.stop(now + 1.2);

  } catch (err) {
    console.debug('Fanfare suppressed:', err);
  }
}
