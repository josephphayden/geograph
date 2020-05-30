// eslint-disable-next-line import/prefer-default-export
export const calculateRank = (population, populationDensity) => {
  if (!population || !populationDensity) {
    return 0;
  }

  return population / populationDensity;
};
