const withTheme = (styles) => (theme) =>
  styles.map((style) => (typeof style === 'function' ? style(theme) : style));

export default withTheme;
