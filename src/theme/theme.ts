import remFunction from './mixins/remFunction';
import mediaQueriesFunction from './mixins/mediaQueries';

export const remCalc = remFunction;

export const getMediaQuery = mediaQueriesFunction;

export const colors = {
  primary: '#079CEE',
  white: '#FFF',
  black: '#000000',
  gray100: '#FAFAFB',
  gray200: '#E5E5E5',
  gray300: '#E2E2EA',
  gray400: '#8C8C8C'
};

export const globalStyle = {
  radius: '12px',
  width: `${remCalc(984)}`,
  gutterSmall: `${remCalc(14)}`,
  gutterMedium: `${remCalc(24)}`,
  shadow: '0px 2px 4px rgba(0, 0, 0, .03)',
};

export const Spaces = {
  default: '12px',
  small: '8px',
  medium: '24px',
  large: '34px'
};

export const transition = {
  prop: 'all',
  duration: '400ms',
  timing: 'cubic-bezier(.165, .84, .44, 1)',
  global: 'all 400ms cubic-bezier(.165, .84, .44, 1)',
};

export const breakpoints = {
  small: ' 0px',
  medium: '768px',
  large: '1024px',
  xlarge: '1200px',
  xxlarge: '1500px',
};

export const mediaQueries = {
  smallOnly: `@media only screen and (max-width : ${breakpoints.medium})`,
  medium: `@media only screen and (min-width: ${breakpoints.medium})`,
  mediumOnly: `@media only screen and (max-width : ${breakpoints.large}) and (min-width:${breakpoints.medium})`,
  mediumDown: `@media only screen and (max-width : ${breakpoints.large})`,
  large: `@media only screen and (min-width: ${breakpoints.large})`,
  largeDown: `@media only screen and (max-width : ${breakpoints.xlarge})`,
  xlarge: `@media only screen and (min-width: ${breakpoints.xlarge})`,
  xlargeDown: `@media only screen and (max-width : ${breakpoints.xxlarge})`,
  xlargeOnly: `@media only screen and (max-width : ${breakpoints.xxlarge}) and (min-width:${breakpoints.xlarge})`,
  xxlarge: `@media only screen and (min-width: ${breakpoints.xxlarge})`,
};