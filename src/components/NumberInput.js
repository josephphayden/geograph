/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const css = {
  input: ({ size }) => (theme) => ({
    height: theme.layout.inputHeight - 2 * (theme.baseline / 2),
    width: theme.layout.inputWidths[size],
    padding: theme.baseline / 2,
    fontSize: theme.font.scale.default,
    fontFamily: theme.font.family.body,
    color: theme.colors.primary,
    backgroundColor: theme.colors.white,
    caretColor: theme.colors.highlight,
    borderRadius: theme.borders.radius.low,
    border: `1px solid ${theme.colors.primary}`,
    webkitAppearance: 'none',
    outline: 'none',
    '&:hover': {
      borderColor: theme.colors.highlight,
    },
    '&:focus': {
      borderColor: theme.colors.highlight,
    },
  }),
};

const NumberInput = ({ name, placeholder, value, onChange, size, min, max, step }) => (
  <input
    css={css.input({ size })}
    type="number"
    placeholder={placeholder}
    id={name}
    name={name}
    value={value}
    onChange={(event) => onChange(event.target.value, event.target.name)}
    min={min}
    max={max}
    step={step}
  />
);

NumberInput.defaultProps = {
  size: 'xsmall',
  min: '0',
  max: '',
  step: 1,
  placeholder: '',
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.number,
};

export default NumberInput;
