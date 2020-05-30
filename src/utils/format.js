export const formatCapital = (value) => value || 'N/A';

export const formatGini = (value) => (value ? value.toFixed(1) : 'Unknown');

export const formatPopulationDensity = (value) => (value ? value.toFixed(2) : 'Unknown');

export const formatPopulation = (value) => value.toFixed();

export const formatRank = (value) => (value ? value.toFixed(0) : '0');
