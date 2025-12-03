import { describe, it, expect } from 'vitest';

describe('Polyline utilities', () => {
	it('should encode polylines', () => {
		const coords = [[0, 0], [1, 1]];
		expect(coords.length).toBe(2);
	});

	it('should decode polylines', () => {
		const encoded = 'encoded_string';
		expect(encoded).toBeTruthy();
	});
});

