/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const css = {
  name: (theme) => ({
    display: 'block',
    fontFamily: theme.font.family.bodyBold,
    marginBottom: theme.baseline / 4,
  }),
};

const Property = ({ name, value }) => (
  <div>
    <span css={css.name}>{name}</span>
    <span>{value}</span>
  </div>
);

Property.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Property;
