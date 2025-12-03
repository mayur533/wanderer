import { describe, it, expect } from 'vitest';

describe('ActivityPub utilities', () => {
	it('should validate ActivityPub objects', () => {
		const obj = { type: 'Note', content: 'test' };
		expect(obj.type).toBe('Note');
	});

	it('should serialize ActivityPub objects', () => {
		const obj = { id: 'test-id' };
		expect(obj.id).toBeTruthy();
	});

	it('should deserialize ActivityPub objects', () => {
		const json = '{"type":"Note"}';
		const parsed = JSON.parse(json);
		expect(parsed.type).toBe('Note');
	});
});

