/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useQuery } from '@apollo/react-hooks';

import { getCountries } from './queries';

const css = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: (theme) => ({
    fontFamily: theme.font.family.title,
    fontSize: theme.font.scale.xxxlarge,
  }),
};

const App = () => {
  const { data } = useQuery(getCountries);

  return (
    <div css={css.container}>
      <div css={css.header}>
        <h1 css={css.heading}>GeoGraph</h1>
      </div>
    </div>
  );
};

export default App;
