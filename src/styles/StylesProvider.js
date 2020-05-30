import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';

import general from './general';
import theme from './theme';

import './fonts.css';

const StylesProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={general} />
    {children}
  </ThemeProvider>
);

StylesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StylesProvider;
