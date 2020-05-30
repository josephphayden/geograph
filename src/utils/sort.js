export const sortCountriesAlphabetical = (countries) =>
  countries.sort((a, b) => a.name.localeCompare(b.name));

export const sortCountriesReverseAlphabetical = (countries) =>
  countries.sort((a, b) => b.name.localeCompare(a.name));

export const sortCountriesGiniAscending = (countries) =>
  countries
    .filter(({ gini }) => !!gini)
    .sort((a, b) => {
      if (a.gini > b.gini) {
        return 1;
      }

      if (a.gini < b.gini) {
        return -1;
      }

      return 0;
    });

export const sortCountriesGiniDescending = (countries) =>
  countries
    .filter(({ gini }) => !!gini)
    .sort((a, b) => {
      if (a.gini > b.gini) {
        return -1;
      }

      if (a.gini < b.gini) {
        return 1;
      }

      return 0;
    });
