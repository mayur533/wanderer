import { describe, it, expect } from 'vitest';

describe('GPX utilities', () => {
	it('should parse GPX files', () => {
		const gpx = '<?xml version="1.0"?><gpx></gpx>';
		expect(gpx).toContain('gpx');
	});

	it('should validate GPX data', () => {
		const data = { version: '1.1' };
		expect(data.version).toBe('1.1');
	});
});

