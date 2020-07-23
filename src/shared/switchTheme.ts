import Theme from '@/types/theme';

const switchTheme = (val: Theme) =>
  document.documentElement.setAttribute('data-theme', val);

export default switchTheme;
