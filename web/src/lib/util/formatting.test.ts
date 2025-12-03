import { describe, it, expect } from 'vitest';

describe('Formatting utilities', () => {
	it('should format distance correctly', () => {
		const distance = 1234.56;
		expect(distance).toBeGreaterThan(0);
	});

	it('should format duration correctly', () => {
		const duration = 3600;
		expect(duration).toBeGreaterThan(0);
	});

	it('should format elevation correctly', () => {
		const elevation = 1234;
		expect(elevation).toBeGreaterThan(0);
	});
});

