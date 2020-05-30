/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getCountries } from './queries';
import CountriesList from './components/CountriesList';

import {
  formatGini,
  formatPopulation,
  formatPopulationDensity,
  formatCapital,
  formatRank,
} from './utils/format';
import { calculateRank } from './utils/calculate';

const css = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: (theme) => ({
    fontFamily: theme.font.family.title,
    fontSize: theme.font.scale.xxxlarge,
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
  gini: formatGini(gini),
  flag,
});

const App = () => {
  const [countries, setCountries] = useState([]);
  const { data } = useQuery(getCountries);

  useEffect(() => {
    if (data) {
      setCountries(data.Country.map(processApiCountryData));
    }
  }, [data]);

  return (
    <div css={css.container}>
      <div css={css.header}>
        <h1 css={css.heading}>GeoGraph</h1>
      </div>
      <CountriesList countries={countries} />
    </div>
  );
};

export default App;
