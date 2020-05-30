/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import Country from './Country';

const css = {
  grid: (theme) => ({
    ...theme.styles.grid({ gap: theme.baseline, numColumns: 1 }),
    [theme.helpers.mq('m')]: {
      ...theme.styles.grid({ gap: theme.baseline, numColumns: 2 }),
    },
    [theme.helpers.mq('xl')]: {
      ...theme.styles.grid({ gap: theme.baseline * 2, numColumns: 3 }),
    },
  }),
};

const CountriesList = ({ countries }) => (
  <div css={css.grid}>
    {countries.map((country) => (
      <Country key={country.name} country={country} />
    ))}
  </div>
);

CountriesList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CountriesList;
