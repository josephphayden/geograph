import React from 'react';
import ReactDOM from 'react-dom';

import StylesProvider from './styles/StylesProvider';
import App from './App';

ReactDOM.render(
  <StylesProvider>
    <App />
  </StylesProvider>,
  document.getElementById('root')
);
