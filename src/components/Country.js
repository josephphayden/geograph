/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Property from './Property';

const css = {
  container: (theme) => ({
    backgroundColor: theme.colors.white,
    borderRadius: theme.borders.radius.medium,
    padding: theme.baseline * 0.75,
    boxShadow: theme.shadows.medium,
  }),
  header: () => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  name: (theme) => ({
    margin: 0,
    fontFamily: theme.font.family.heading,
    fontSize: theme.font.scale.xlarge,
  }),
  flag: (theme) => ({
    maxHeight: theme.baseline * 2.5,
    width: 'auto',
    borderRadius: theme.borders.radius.low,
    marginLeft: theme.baseline / 2,
  }),
  fieldRow: (theme) => ({
    marginTop: theme.baseline,
    ...theme.styles.grid({ gap: theme.baseline, numColumns: 3 }),
  }),
};

const Country = ({
  country: { name, capital, gini, population, populationDensity, rank, flag },
}) => (
  <div css={css.container}>
    <div css={css.header}>
      <h2 css={css.name}>{name}</h2>
      <img css={css.flag} src={flag} alt={`${name} flag`} />
    </div>
    <div css={css.fieldRow}>
      <Property name="Capital" value={capital} />
      <Property name="Gini index" value={gini} />
    </div>
    <div css={css.fieldRow}>
      <Property name="Population" value={population} />
      <Property name="Pop. Density" value={populationDensity} />
      <Property name="Rank" value={rank} />
    </div>
  </div>
);

Country.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Country;
