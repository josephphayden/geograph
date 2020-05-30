import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import StylesProvider from './styles/StylesProvider';
import App from './App';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
});

ReactDOM.render(
  <StylesProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StylesProvider>,
  document.getElementById('root')
);
