/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-boost';

export const getCountries = gql`
  {
    Country {
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
