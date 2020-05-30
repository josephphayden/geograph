/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import Select from './Select';

import sortOptions from '../data/sortOptions';

const css = {
  container: () => ({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  sort: (theme) => ({
    maxWidth: theme.layout.inputWidths.small,
  }),
  label: (theme) => ({
    fontFamily: theme.font.family.bodyBold,
    display: 'block',
    marginBottom: theme.baseline / 4,
  }),
};

const Filters = ({ sortOption, setSortOption }) => (
  <div css={css.container}>
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

Filters.propTypes = {
  sortOption: PropTypes.objectOf(PropTypes.any).isRequired,
  setSortOption: PropTypes.func.isRequired,
};

export default Filters;
