const colors = {
  primary: '#05386b',
  secondary: '#5cdb95',
  highlight: '#379683',
  white: '#edf5e1',
  grey: '#424242',
};

const baseline = 16;

const layout = {
  inputHeight: baseline * 2.5,
  inputWidths: {
    small: baseline * 10,
    medium: baseline * 20,
    large: baseline * 40,
  },
};

const borders = {
  radius: {
    low: '4px',
    medium: '8px',
    high: '16px',
  },
};

const shadows = {
  short: '0 0 2px 0 rgba(0, 0, 0, 0.1)',
  medium: '0 0 4px 0 rgba(0, 0, 0, 0.2)',
};

const grid = {
  breakpoints: {
    s: 480,
    m: 640,
    l: 960,
    xl: 1280,
  },
  columns: {
    s: 6,
    m: 12,
    l: 12,
  },
  gutter: {
    s: 15,
    m: 40,
    l: 40,
  },
  maxWidth: {
    s: 500,
    m: 860,
    l: 1800,
  },
};

const font = {
  family: {
    title: 'BarlowCondensed-Medium, Verdana, Geneva, sans-serif',
    heading: 'BarlowCondensed-SemiBold, Verdana, Geneva, sans-serif',
    body: 'OpenSans-Regular, Arial, Helvetica, sans-serif',
    bodyBold: 'OpenSans-SemiBold, Arial, Helvetica, sans-serif',
  },
  baseline: '100%',
  scale: {
    // 10pt
    xsmall: '0.625rem',
    // 12pt
    small: '0.75rem',
    // 14pt
    default: '0.875rem',
    // 16pt
    medium: '1rem',
    // 18pt
    large: '1.125rem',
    // 22pt
    xlarge: '1.375rem',
    // 28pt
    xxlarge: '1.75rem',
    // 34pt
    xxxlarge: '2.125rem',
    // 48pt
    xxxxlarge: '2.5rem',
  },
};

const helpers = {
  mq: (min, max) =>
    max
      ? `@media (min-width: ${grid.breakpoints[min]}px) and (max-width: ${grid.breakpoints[max]}px)`
      : `@media (min-width: ${grid.breakpoints[min]}px)`,
  supports: {
    grid: '@supports (display: grid)',
  },
};

const styles = {
  grid: ({ gap, numColumns }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: -gap,
    '> *': {
      width: `calc((100% - ${(numColumns - 1) * gap}px) / ${numColumns})`,
      marginBottom: gap,
    },
    [helpers.supports.grid]: {
      display: 'grid',
      gridTemplateColumns: '1fr '.repeat(numColumns),
      gap,
      marginBottom: 0,
      '> *': {
        width: 'auto',
        marginBottom: 0,
      },
    },
  }),
};

export default {
  baseline,
  layout,
  colors,
  borders,
  shadows,
  grid,
  font,
  helpers,
  styles,
};
