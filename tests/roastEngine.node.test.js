import { describe, it } from 'node:test';
import assert from 'node:assert';
import { 
  generateRoast, 
  generateAssessmentResult,
  AI_TOOLS, 
  EXPERIENCE_LEVELS, 
  CODE_RATIO_OPTIONS, 
  EXPLAIN_CODE_OPTIONS, 
  ERROR_HANDLING_OPTIONS, 
  OUTAGE_OPTIONS 
} from '../src/data/roastEngine.js';

describe('roastEngine Business Logic & Assessment Data (Node Native Test)', () => {
  it('has valid structure for all option dictionaries', () => {
    assert.ok(AI_TOOLS.length > 5, 'AI_TOOLS should have > 5 items');
    AI_TOOLS.forEach(tool => {
      assert.ok(tool.id, 'Tool should have id');
      assert.ok(tool.name, 'Tool should have name');
      assert.ok(tool.icon, 'Tool should have icon');
    });

    assert.ok(EXPERIENCE_LEVELS.length >= 4, 'EXPERIENCE_LEVELS should have >= 4 items');
    EXPERIENCE_LEVELS.forEach(lvl => {
      assert.ok(lvl.id, 'Experience level should have id');
      assert.ok(lvl.label, 'Experience level should have label');
      assert.ok(lvl.subtitle, 'Experience level should have subtitle');
    });

    [CODE_RATIO_OPTIONS, EXPLAIN_CODE_OPTIONS, ERROR_HANDLING_OPTIONS, OUTAGE_OPTIONS].forEach(group => {
      assert.ok(group.length >= 3, 'Option group should have >= 3 items');
      group.forEach(opt => {
        assert.ok(opt.id, 'Option should have id');
        assert.ok(opt.label, 'Option should have label');
        assert.ok(opt.desc, 'Option should have desc');
      });
    });
  });

  it('generates a valid certificate for standard user input', () => {
    const input = {
      name: 'Ada Lovelace',
      experience: 'senior',
      aiTool: 'cursor',
      codeRatio: 'heavy',
      explainCode: 'prayer',
      errorHandling: 'copypaste',
      outageReaction: 'nap',
    };

    const result = generateRoast(input);
    assert.strictEqual(result.name, 'ADA LOVELACE');
    assert.match(result.certificateId, /^CC-2026-\d{5}$/);
    assert.ok(result.dependencyPercentage >= 80, 'Score should be >= 80');
    assert.ok(result.dependencyPercentage <= 99.9, 'Score should be <= 99.9');
    assert.ok(result.officialTitle);
    assert.ok(result.specialAchievement);
    assert.ok(result.copingMechanism);
    assert.ok(result.finalVerdict);
    assert.strictEqual(result.aiTool, 'Cursor');
    assert.strictEqual(result.aiIcon, '⚡');
  });

  it('handles edge case names like empty, whitespace, and very long names gracefully', () => {
    // Empty / whitespace name
    const emptyResult = generateRoast({ name: '   ', aiTool: 'chatgpt' });
    assert.strictEqual(emptyResult.name, 'ANONYMOUS PROMPT ENGINEER');

    // Super long name
    const longName = 'Maximilianus Von Hohenzollern-Sigmaringen The Third of Silicon Valley';
    const longResult = generateRoast({ name: longName, aiTool: 'claude' });
    assert.strictEqual(longResult.name, longName.toUpperCase());
    assert.strictEqual(longResult.aiTool, 'Claude');
    assert.strictEqual(longResult.aiIcon, '🧡');

    // Special characters
    const specialName = '<script>alert("hacked")</script> & "Dev"';
    const specialResult = generateRoast({ name: specialName, aiTool: 'windsurf' });
    assert.strictEqual(specialResult.name, specialName.toUpperCase());
    assert.strictEqual(specialResult.aiTool, 'Windsurf');
    assert.strictEqual(specialResult.aiIcon, '🏄‍♂️');
  });

  it('correctly maps all authentic AI tool models and emojis', () => {
    const expectedMappings = {
      cursor: '⚡',
      windsurf: '🏄‍♂️',
      claude: '🧡',
      chatgpt: '🟢',
      copilot: '🐙',
      antigravity: '🚀',
      deepseek: '🐋',
      opencode: '🦙',
      gemini: '✨',
      qwen: '🐉',
      grok: '🏴‍☠️',
    };

    Object.entries(expectedMappings).forEach(([toolKey, expectedEmoji]) => {
      const res = generateRoast({ name: 'Tester', aiTool: toolKey });
      assert.strictEqual(res.aiIcon, expectedEmoji, `Emoji mismatch for ${toolKey}`);
    });
  });

  it('generates consistent deterministic properties across multiple calls with same inputs', () => {
    const input = {
      name: 'Linus Torvalds',
      experience: 'senior',
      aiTool: 'deepseek',
      codeRatio: 'heavy',
    };

    const res1 = generateAssessmentResult(input);
    const res2 = generateAssessmentResult(input);

    assert.strictEqual(res1.name, res2.name);
    assert.strictEqual(res1.certificateId, res2.certificateId);
    assert.strictEqual(res1.dependencyPercentage, res2.dependencyPercentage);
    assert.strictEqual(res1.aiTool, res2.aiTool);
    assert.strictEqual(res1.aiIcon, res2.aiIcon);
  });
});
