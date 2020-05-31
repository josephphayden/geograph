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
  alpha3Code,
  name,
  capital,
  population,
  populationDensity,
  gini,
  flag: { svgFile: flag },
}) => ({
  id: alpha3Code,
  name,
  capital: formatCapital(capital),
  population: formatPopulation(population),
  populationDensity: formatPopulationDensity(populationDensity),
  rank: formatRank(calculateRank(population, populationDensity)),
  gini,
  flag,
});

const filterCountries = ({ countries, selectedCountries, minGini, maxGini }) =>
  countries.filter(({ id: countryId, gini }) => {
    if ((minGini || maxGini) && !gini) {
      return false;
    }
    if (minGini && gini < Number(minGini)) {
      return false;
    }

    if (maxGini && gini > Number(maxGini)) {
      return false;
    }

    if (selectedCountries.length > 0 && !selectedCountries.find(({ id }) => id === countryId)) {
      return false;
    }

    return true;
  });

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [minGini, setMinGini] = useState('');
  const [maxGini, setMaxGini] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState(sortOptions[0]);
  const { data } = useQuery(getCountries);

  const toggleFilters = () => setShowFilters(!showFilters);

  useEffect(() => {
    if (data) {
      setAllCountries(data.Country.map(processApiCountryData));
    }
  }, [data]);

  useEffect(() => {
    if (allCountries.length > 0) {
      const countriesCopy = [...allCountries];
      const filtersSelected = selectedCountries.length > 0 || minGini || maxGini;

      const filteredCountries = filtersSelected
        ? filterCountries({ countries: countriesCopy, selectedCountries, minGini, maxGini })
        : countriesCopy;

      setVisibleCountries([...sortOption.sort(filteredCountries)]);
    }
  }, [allCountries, sortOption, selectedCountries, minGini, maxGini]);

  return (
    <div css={css.container}>
      <div css={css.header}>
        <h1 css={css.heading}>GeoGraph</h1>
        <button type="button" css={css.filtersToggle} onClick={toggleFilters}>
          <FiltersIcon css={css.filtersIcon} />
        </button>
      </div>
      {showFilters && (
        <Filters
          setSortOption={setSortOption}
          sortOption={sortOption}
          selectedCountries={selectedCountries}
          allCountries={allCountries}
          setSelectedCountries={setSelectedCountries}
          minGini={minGini}
          setMinGini={setMinGini}
          maxGini={maxGini}
          setMaxGini={setMaxGini}
        />
      )}
      <CountriesList countries={visibleCountries} />
    </div>
  );
};

export default App;
