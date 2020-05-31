/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import Select from './Select';

import sortOptions from '../data/sortOptions';
import NumberInput from './NumberInput';

const css = {
  container: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingBottom: theme.baseline,
  }),
  search: (theme) => ({
    width: '100%',
    marginBottom: theme.baseline,
    [theme.helpers.mq('m')]: {
      marginRight: theme.baseline,
      marginBottom: 0,
      maxWidth: theme.layout.inputWidths.large,
    },
  }),
  gini: (theme) => ({
    marginBottom: theme.baseline,
    marginRight: theme.baseline,
    [theme.helpers.mq('m')]: {
      marginBottom: 0,
    },
  }),
  maxGini: (theme) => ({
    marginBottom: theme.baseline,
    marginRight: theme.baseline,
    [theme.helpers.mq('m')]: {
      marginBottom: 0,
      flexGrow: 1,
    },
  }),
  sort: (theme) => ({
    width: '100%',
    [theme.helpers.mq('m')]: {
      marginBottom: 0,
      width: 'auto',
      flexGrow: 2,
      maxWidth: theme.layout.inputWidths.small,
    },
  }),
  label: (theme) => ({
    fontFamily: theme.font.family.bodyBold,
    display: 'block',
    marginBottom: theme.baseline / 4,
  }),
};

const searchCountryByNameOrCapital = ({ data: { capital, name } }, searchString) => {
  const lowerString = searchString.toLowerCase();

  if (capital.toLowerCase().includes(lowerString) || name.toLowerCase().includes(lowerString)) {
    return true;
  }

  return false;
};

const Filters = ({
  allCountries,
  selectedCountries,
  setSelectedCountries,
  sortOption,
  setSortOption,
  minGini,
  setMinGini,
  maxGini,
  setMaxGini,
}) => (
  <div css={css.container}>
    <label htmlFor="search" css={css.search}>
      <span css={css.label}>Search</span>
      <Select
        name="search"
        placeholder="Search by name or capital city"
        value={selectedCountries}
        options={allCountries}
        onChange={setSelectedCountries}
        filterOption={searchCountryByNameOrCapital}
        size="large"
        isMulti
        isSearchable
        isClearable
        defaultValue={[]}
      />
    </label>
    <label htmlFor="minGini" css={css.gini}>
      <span css={css.label}>Min. Gini</span>
      <NumberInput name="minGini" placeholder="0" value={minGini} onChange={setMinGini} />
    </label>
    <label htmlFor="maxGini" css={css.maxGini}>
      <span css={css.label}>Max. Gini</span>
      <NumberInput name="maxGini" placeholder="100" value={maxGini} onChange={setMaxGini} />
    </label>
    <label htmlFor="sort" css={css.sort}>
      <span css={css.label}>Sort</span>
      <Select
        name="sort"
        value={sortOption}
        options={sortOptions}
        onChange={setSortOption}
        size="small"
      />
    </label>
  </div>
);

Filters.defaultProps = {
  selectedCountries: null,
  minGini: '',
  maxGini: '',
};

Filters.propTypes = {
  allCountries: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCountries: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.object),
  ]),
  setSelectedCountries: PropTypes.func.isRequired,
  sortOption: PropTypes.objectOf(PropTypes.any).isRequired,
  setSortOption: PropTypes.func.isRequired,
  minGini: PropTypes.string,
  setMinGini: PropTypes.func.isRequired,
  maxGini: PropTypes.string,
  setMaxGini: PropTypes.func.isRequired,
};

export default Filters;
