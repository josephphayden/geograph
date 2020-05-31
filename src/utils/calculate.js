export const calculateRank = (population, populationDensity) => {
  if (!population || !populationDensity) {
    return 0;
  }

  return population / populationDensity;
};

export const calculatePopulationDensity = (population, rank) => {
  if (!population || !rank) {
    return 0;
  }

  return population / rank;
};
