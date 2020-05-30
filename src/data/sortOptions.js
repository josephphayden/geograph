import {
  sortCountriesAlphabetical,
  sortCountriesReverseAlphabetical,
  sortCountriesGiniAscending,
  sortCountriesGiniDescending,
} from '../utils/sort';

export default [
  {
    id: 'alphabeticalAsc',
    name: 'Name A-Z',
    sort: sortCountriesAlphabetical,
  },
  {
    id: 'alphabeticalDesc',
    name: 'Name Z-A',
    sort: sortCountriesReverseAlphabetical,
  },
  {
    id: 'rankAsc',
    name: 'Gini Index ↑',
    sort: sortCountriesGiniAscending,
  },
  {
    id: 'rankDesc',
    name: 'Gini Index ↓',
    sort: sortCountriesGiniDescending,
  },
];
