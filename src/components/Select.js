/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

const css = ({ theme, size }) => ({
  container: (provided) => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
    borderRadius: theme.borders.radius.low,
    borderColor: theme.colors.primary,
    outline: 'none',
    boxShadow: theme.shadows.short,
    height: theme.layout.inputHeight,
    width: theme.layout.inputWidths[size],
    '&:hover': {
      borderColor: theme.colors.highlight,
    },
    ...(state.isFocused && {
      borderColor: theme.colors.primary,
    }),
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    color: theme.colors.grey,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
  }),
  menu: (provided) => ({
    ...provided,
    borderColor: theme.colors.grey,
    borderRadius: theme.borders.radius.low,
    boxShadow: theme.shadows.medium,
    zIndex: 10,
    overflow: 'auto',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: 'none',
    ...(state.isFocused && {
      backgroundColor: theme.colors.highlight,
      color: theme.colors.white,
      '&:active': {
        backgroundColor: theme.colors.primary,
      },
    }),
    ...(state.isSelected && {
      color: theme.colors.white,
      backgroundColor: theme.colors.primary,
      '&:active': {
        backgroundColor: theme.colors.primary,
      },
    }),
  }),
  placeholder: (provided) => ({
    ...provided,
    ...theme.styles.placeholder,
  }),
});

const Select = ({ name, value, placeholder, onChange, options, size }) => {
  const theme = useTheme();

  return (
    <ReactSelect
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      options={options}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
      styles={css({ theme, size })}
    />
  );
};

Select.defaultProps = {
  size: 'medium',
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.objectOf(PropTypes.any).isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
};

export default Select;
