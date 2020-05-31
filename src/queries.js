/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-boost';

export const getCountries = gql`
  {
    Country(first: 150) {
      alpha3Code
      name
      population
      populationDensity
      capital
      gini
      flag {
        svgFile
      }
    }
  }
`;
