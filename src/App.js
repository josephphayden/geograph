/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getCountries } from './queries';
import CountriesList from './components/CountriesList';
import Filters from './components/Filters';
import { ReactComponent as FiltersIcon } from './icons/filters.svg';

import {
  formatPopulation,
  formatPopulationDensity,
  formatCapital,
  formatRank,
} from './utils/format';
import { calculateRank } from './utils/calculate';

import sortOptions from './data/sortOptions';

const css = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.baseline * 2,
    marginBottom: theme.baseline,
  }),
  heading: (theme) => ({
    fontFamily: theme.font.family.title,
    fontSize: theme.font.scale.xxxlarge,
    margin: 0,
  }),
  filtersToggle: (theme) => ({
    '&:hover': {
      cursor: 'pointer',
      svg: {
        g: {
          fill: theme.colors.highlight,
        },
      },
    },
  }),
  filtersIcon: (theme) => ({
    height: theme.baseline * 2,
  }),
};

const processApiCountryData = ({
  name,
  capital,
  population,
  populationDensity,
  gini,
  flag: { svgFile: flag },
}) => ({
  name,
  capital: formatCapital(capital),
  population: formatPopulation(population),
  populationDensity: formatPopulationDensity(populationDensity),
  rank: formatRank(calculateRank(population, populationDensity)),
  gini,
  flag,
});

const App = () => {
  const [countries, setCountries] = useState([]);
  const [sortedCountries, setSortedCountries] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState(sortOptions[0]);
  const { data } = useQuery(getCountries);

  const toggleFilters = () => setShowFilters(!showFilters);

  useEffect(() => {
    if (data) {
      setCountries(data.Country.map(processApiCountryData));
    }
  }, [data]);

  useEffect(() => {
    if (countries.length > 0) {
      setSortedCountries([...sortOption.sort(countries)]);
    }
  }, [countries, sortOption]);

  return (
    <div css={css.container}>
      <div css={css.header}>
        <h1 css={css.heading}>GeoGraph</h1>
        <button type="button" css={css.filtersToggle} onClick={toggleFilters}>
          <FiltersIcon css={css.filtersIcon} />
        </button>
      </div>
      {showFilters && <Filters setSortOption={setSortOption} sortOption={sortOption} />}
      <CountriesList countries={sortedCountries} />
    </div>
  );
};

export default App;
