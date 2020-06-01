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
    width: '100%',
    maxWidth: theme.layout.inputWidths[size],
    '&:hover': {
      borderColor: theme.colors.highlight,
    },
    ...(state.isFocused && {
      borderColor: theme.colors.primary,
    }),
  }),
  valueContainer: (provided) => ({
    ...provided,
    minHeight: theme.layout.inputHeight,
    padding: theme.baseline / 2,
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
    maxWidth: theme.layout.inputWidths[size],
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

const Select = ({
  name,
  value,
  defaultValue,
  placeholder,
  onChange,
  options,
  size,
  isMulti,
  isSearchable,
  isClearable,
  filterOption,
}) => {
  const theme = useTheme();

  const handleOnChange = (newValue) => {
    if (isMulti && newValue === null) {
      return onChange(defaultValue);
    }

    return onChange(newValue);
  };

  return (
    <ReactSelect
      id={name}
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={handleOnChange}
      options={options}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
      isClearable={isClearable}
      isSearchable={isSearchable}
      filterOption={filterOption}
      isMulti={isMulti}
      styles={css({ theme, size })}
    />
  );
};

Select.defaultProps = {
  size: 'medium',
  placeholder: '',
  value: null,
  defaultValue: null,
  filterOption: null,
  isMulti: false,
  isSearchable: false,
  isClearable: false,
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.object),
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]),
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  filterOption: PropTypes.func,
  size: PropTypes.string,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isClearable: PropTypes.bool,
};

export default Select;
