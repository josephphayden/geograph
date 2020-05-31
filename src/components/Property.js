/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import NumberInput from './NumberInput';

const css = {
  name: (theme) => ({
    display: 'block',
    fontFamily: theme.font.family.bodyBold,
    marginBottom: theme.baseline / 4,
  }),
};

const Property = ({ label, name, value, editable, onChange, inputProps }) => (
  <div>
    <span css={css.name}>{label}</span>
    {editable ? (
      <NumberInput value={value} name={name} onChange={onChange} {...inputProps} />
    ) : (
      <span>{value}</span>
    )}
  </div>
);

Property.defaultProps = {
  editable: false,
  name: '',
  onChange: null,
  inputProps: {},
};

Property.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  onChange: PropTypes.func,
  inputProps: PropTypes.objectOf(PropTypes.any),
};

export default Property;
