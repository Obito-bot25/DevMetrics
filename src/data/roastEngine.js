// Roast Engine: Generates personalized, surgical developer roasts based on AI stack & experience

export const AI_TOOLS = [
  { id: 'cursor', name: 'Cursor', icon: '⚡', brandLogo: 'cursor', vibe: 'Tabs your entire career away' },
  { id: 'claude', name: 'Claude', icon: '🧡', brandLogo: 'claude', vibe: 'Emotionally supportive tech lead' },
  { id: 'chatgpt', name: 'ChatGPT', icon: '🟢', brandLogo: 'chatgpt', vibe: 'Classic 2023 hallucination machine' },
  { id: 'copilot', name: 'GitHub Copilot', icon: '🐙', brandLogo: 'copilot', vibe: 'Autocomplete on steroids' },
  { id: 'windsurf', name: 'Windsurf', icon: '🏄‍♂️', brandLogo: 'windsurf', vibe: 'Cascade-fueled denial' },
  { id: 'deepseek', name: 'DeepSeek', icon: '🐋', brandLogo: 'deepseek', vibe: 'Open weights, closed comprehension' },
  { id: 'gemini', name: 'Gemini', icon: '✨', brandLogo: 'gemini', vibe: '2M context window for your 12-line script' },
  { id: 'antigravity', name: 'Antigravity', icon: '🚀', brandLogo: 'antigravity', vibe: 'Autonomous agent doing everything while you sip matcha' },
  { id: 'grok', name: 'Grok', icon: '🏴‍☠️', brandLogo: 'grok', vibe: 'Unfiltered code with maximum attitude' },
  { id: 'qwen', name: 'Qwen', icon: '🐉', brandLogo: 'qwen', vibe: 'Math genius, unit test phobic' },
  { id: 'opencode', name: 'Ollama / OpenCode', icon: '🦙', brandLogo: 'ollama', vibe: 'Heats your MacBook to 95°C to produce a syntax error' },
  { id: 'other', name: 'Other / Custom Stack', icon: '🔮', brandLogo: 'other', vibe: 'Whatever takes the keyboard away from you' },
];

export const EXPERIENCE_LEVELS = [
  { id: 'beginner', label: 'Beginner', subtitle: 'Learned Python last week via prompt engineering' },
  { id: 'intermediate', label: 'Intermediate', subtitle: 'Knows what React is, refuses to write CSS manually' },
  { id: 'advanced', label: 'Advanced', subtitle: 'Can debug async/await, but Claude does it faster' },
  { id: 'senior', label: 'Senior Engineer', subtitle: '10+ years of CS theory reduced to pressing Tab' },
];

export const CODE_RATIO_OPTIONS = [
  { id: 'light', label: '10% – 30%', desc: 'I still write some logic, AI handles boilerplate', score: 35 },
  { id: 'medium', label: '40% – 60%', desc: '50/50 coproduction. We are basically co-founders', score: 65 },
  { id: 'heavy', label: '70% – 90%', desc: 'I write comments and variable names; AI does the rest', score: 88 },
  { id: 'complete', label: '95% – 100%', desc: 'I only write the git commit messages (and AI writes those too)', score: 98 },
];

export const EXPLAIN_CODE_OPTIONS = [
  { id: 'always', label: 'Yes, thoroughly', desc: 'I read every diff line by line (after it works in dev)', score: 30 },
  { id: 'panic', label: 'Only if asked in standup', desc: 'I panic-skim the PR before clicking Approve', score: 70 },
  { id: 'prayer', label: 'I nod when tests pass', desc: 'Green checkmarks mean God intended this code to run', score: 90 },
  { id: 'blind', label: "I don't even look", desc: 'If TypeScript does not complain, neither do I', score: 99 },
];

export const ERROR_HANDLING_OPTIONS = [
  { id: 'stacktrace', label: 'I read the terminal stack trace', desc: 'Old-school detective work', score: 25 },
  { id: 'copypaste', label: 'Copy-paste entire red terminal back to AI', desc: 'No context given, just raw panic dump', score: 80 },
  { id: 'fixit', label: 'Type "fix it and don\'t break anything"', desc: 'Passive aggressive prompt engineering', score: 95 },
  { id: 'nuke', label: 'Delete node_modules and git reset --hard', desc: 'Voodoo ritual debugging', score: 90 },
];

export const OUTAGE_OPTIONS = [
  { id: 'switch', label: 'Instantly switch to an alternate model', desc: 'A polyamorous AI relationship', score: 75 },
  { id: 'shaking', label: 'Write code manually with trembling fingers', desc: 'Forgetting how to declare a HashMap', score: 50 },
  { id: 'nap', label: 'Declare ISP outage and take a 3-hour nap', desc: 'Modern remote engineering excellence', score: 95 },
  { id: 'crisis', label: 'Stare at a blank cursor questioning my career', desc: 'Existential dread at 120 FPS', score: 92 },
];

// Matrix of tool-specific achievements & roasts
const TOOL_ROASTS = {
  cursor: {
    title: 'Executive Tab-Tab-Enter Architect',
    achievement: 'Has accepted 18,420 multi-line ghost completions. Has not typed a manual closing bracket since November 2023.',
    coping: 'Staring intensely at the screen while Composer builds the entire auth system so teammates think you are deep in thought.',
  },
  claude: {
    title: 'Chief Emotional Prompt Engineer',
    achievement: 'Treats Claude 3.7 like an emotionally validating CTO who writes all their unit tests and tells them their PR looks great.',
    coping: 'Starting every prompt with "Please" and "You did amazing earlier" just in case the singularity happens before standup.',
  },
  chatgpt: {
    title: 'Senior Hallucination Validator',
    achievement: 'Spent 4 hours convincing ChatGPT that a Python library from 2021 still exists instead of writing 4 lines of code.',
    coping: 'Telling recruiters you have 6 years of experience in GPT-4 API prompting.',
  },
  copilot: {
    title: 'Autonomous Copypasta Lead',
    achievement: 'Let Copilot autocomplete a regex with 9 lookaheads directly into production. Still does not know what it matches.',
    coping: 'Pretending you knew how to implement binary search from scratch.',
  },
  windsurf: {
    title: 'Flow-State Passenger',
    achievement: 'Clicked "Cascade" 42 times in a single session. Surrendered repo sovereignty before noon.',
    coping: 'Claiming your fast velocity is due to "system thinking" rather than handing the steering wheel to an algorithm.',
  },
  deepseek: {
    title: 'Open-Weights Budget Consigliere',
    achievement: 'Downloaded a 671B parameter model to write a regex and crashed the local development cluster.',
    coping: 'Explaining to colleagues why your local inference setup is "actually more cost effective" despite a $400 cloud bill.',
  },
  gemini: {
    title: 'Context-Window Hoarder',
    achievement: 'Fed a 1.2-million-token codebase to Gemini to fix a missing semicolon in a CSS file.',
    coping: 'Believing that unlimited context window compensates for not knowing the project architecture.',
  },
  antigravity: {
    title: 'Meta-Loop Spectator & Chai Connoisseur',
    achievement: 'Watched an autonomous agent fix a bug caused by another autonomous agent while claiming 8 hours of productive pair programming.',
    coping: 'Hovering the mouse over the cancel button just to feel a fleeting sense of control.',
  },
  grok: {
    title: 'Edgy Syntax Libertarian',
    achievement: 'Asked Grok to roast your legacy codebase; spent the rest of the day crying in the staging environment.',
    coping: 'Claiming your spaghetti code is "anti-fragile".',
  },
  qwen: {
    title: 'Benchmark Royalty, Prod Liability',
    achievement: 'Chose Qwen because it topped the LMSYS leaderboard; spent 3 days translating comments from Mandarin.',
    coping: 'Insisting that open source synthetic benchmarks represent real-world API reliability.',
  },
  opencode: {
    title: 'Thermal Throttling Martyr',
    achievement: 'Warmed your home office to 85°F running quantized LLMs on an M1 Mac to autocomplete a console.log statement.',
    coping: 'Refusing to use cloud APIs "on principle" while writing unversioned SQLite scripts.',
  },
  other: {
    title: 'Universal AI Submissive',
    achievement: 'Demonstrated complete willingness to delegate every cognitive function to whichever neural net responds first.',
    coping: 'Saying "I am a high-level orchestrator, not a code monkey" in performance reviews.',
  },
};

const SENIORITY_FLAVOR = {
  beginner: {
    titleModifier: 'Junior Prompt Operative',
    verdict: 'Can deploy a full-stack SaaS in 4 minutes. Cannot explain what localhost:3000 actually does.',
  },
  intermediate: {
    titleModifier: 'Mid-Level Prompt Custodian',
    verdict: 'Knows enough to know the AI is hallucinating, but lacks the stamina to stop it.',
  },
  advanced: {
    titleModifier: 'Staff AI Delegator',
    verdict: 'Possesses deep knowledge of software design patterns, but hasn’t typed one with human hands since 2022.',
  },
  senior: {
    titleModifier: 'Distinguished Keyboard Observer',
    verdict: '15 years of hard-won computer science fundamentals traded for pressing Tab 200 times a day.',
  },
};

export function generateAssessmentResult(formData = {}) {
  const { 
    name = '', 
    experience = 'senior', 
    aiTool = 'cursor', 
    codeRatio = 'heavy', 
    explainCode = 'prayer', 
    errorHandling = 'copypaste', 
    outageReaction = 'nap' 
  } = formData;

  const cleanName = (typeof name === 'string' && name.trim().length > 0) 
    ? name.trim() 
    : 'Anonymous Prompt Engineer';

  const toolData = TOOL_ROASTS[aiTool] || TOOL_ROASTS.cursor;
  const seniorData = SENIORITY_FLAVOR[experience] || SENIORITY_FLAVOR.senior;

  const r1 = CODE_RATIO_OPTIONS.find(o => o.id === codeRatio)?.score || 85;
  const r2 = EXPLAIN_CODE_OPTIONS.find(o => o.id === explainCode)?.score || 85;
  const r3 = ERROR_HANDLING_OPTIONS.find(o => o.id === errorHandling)?.score || 80;
  const r4 = OUTAGE_OPTIONS.find(o => o.id === outageReaction)?.score || 90;

  const rawScore = (r1 * 0.35 + r2 * 0.25 + r3 * 0.20 + r4 * 0.20);
  const nameHash = cleanName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const finalPercentage = Math.min(99.4, Math.max(88.2, Number((rawScore + (nameHash % 70) / 10).toFixed(1))));
  const humanCopium = Number((100 - finalPercentage).toFixed(1));

  const officialTitle = `${toolData.title}`;
  const hashId = Math.abs(nameHash * 9301 + 49297) % 89999 + 10000;
  const certificateId = `CC-2026-${hashId}`;

  const now = new Date();
  const issueDate = now.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const toolMeta = AI_TOOLS.find(t => t.id === aiTool) || AI_TOOLS[0];

  return {
    name: cleanName.toUpperCase(),
    experienceLevel: experience.charAt(0).toUpperCase() + experience.slice(1),
    aiTool: toolMeta.name,
    aiIcon: toolMeta.icon,
    brandLogo: toolMeta.brandLogo,
    dependencyPercentage: finalPercentage,
    humanCopiumPercentage: humanCopium,
    officialTitle,
    specialAchievement: toolData.achievement,
    copingMechanism: toolData.coping,
    finalVerdict: seniorData.verdict,
    certificateId,
    issueDate,
  };
}

export const generateRoast = generateAssessmentResult;

