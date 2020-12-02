import { Theme } from '@client';

const switchTheme = (val: Theme) =>
  document.documentElement.setAttribute('data-theme', val);

export default switchTheme;
