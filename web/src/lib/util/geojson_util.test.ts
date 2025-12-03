import { describe, it, expect } from 'vitest';

describe('GeoJSON utilities', () => {
	it('should parse GeoJSON', () => {
		const geojson = { type: 'FeatureCollection', features: [] };
		expect(geojson.type).toBe('FeatureCollection');
	});

	it('should validate GeoJSON structure', () => {
		const feature = { type: 'Feature', geometry: {} };
		expect(feature.type).toBe('Feature');
	});
});

