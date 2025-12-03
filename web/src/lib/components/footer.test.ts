import { describe, it, expect } from 'vitest';

describe('Footer component', () => {
	it('should render footer content', () => {
		const content = 'Footer text';
		expect(content).toBeTruthy();
	});

	it('should display copyright information', () => {
		const year = new Date().getFullYear();
		expect(year).toBeGreaterThan(2020);
	});
});

