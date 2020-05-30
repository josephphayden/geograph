export default (theme) => ({
  html: {
    fontSize: theme.font.baseline,
  },
  body: {
    margin: 0,
    padding: 0,
    color: theme.colors.primary,
    fontFamily: theme.font.family.body,
    fontSize: theme.font.scale.default,
    fontSmoothing: 'antialiased',
    backgroundColor: theme.colors.secondary,
    paddingLeft: theme.baseline,
    paddingRight: theme.baseline,
    [theme.helpers.mq('l')]: {
      paddingLeft: theme.grid.gutter.l * 2,
      paddingRight: theme.grid.gutter.l * 2,
    },
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: theme.colors.primary,
    },
  },
  button: {
    border: 'none',
    padding: 0,
    background: 'inherit',
    fontFamily: theme.font.family.body,
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  input: {
    lineHeight: 'normal',
  },
});
