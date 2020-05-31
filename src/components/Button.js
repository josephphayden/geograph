/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const css = {
  container: (theme) => ({
    height: theme.layout.inputHeight,
    lineHeight: `${theme.layout.inputHeight}px`,
    boxSizing: 'border-box',
    padding: `0 ${theme.baseline * 2}px`,
    borderRadius: theme.borders.radius.low,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    textAlign: 'center',
    fontFamily: theme.font.family.bodyBold,
    fontSize: theme.font.scale.default,
    boxShadow: theme.shadows.low,
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: theme.colors.highlight,
    },
    '&:focus': {
      outline: 'none',
    },
  }),
};

const Button = ({ label, onClick }) => {
  return (
    <button type="button" css={css.container} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
