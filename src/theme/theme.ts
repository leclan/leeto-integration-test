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
  radiusSmall: '4px',
  width: `${remCalc(1032)}`,
  gutterSmall: `${remCalc(14)}`,
  gutterMedium: `${remCalc(24)}`,
  shadow: '0px 2px 4px rgba(0, 0, 0, .03)',
};

export const Spaces = {
  default: `${remCalc(12)}`,
  tiny: `${remCalc(6)}`,
  small: `${remCalc(8)}`,
  medium: `${remCalc(22)}`,
  large: `${remCalc(42)}`
};

export const transition = {
  prop: 'all',
  duration: '400ms',
  timing: 'cubic-bezier(.165, .84, .44, 1)',
  global: 'all 400ms cubic-bezier(.165, .84, .44, 1)',
};

export const breakpoints = {
  small: 0,
  medium: 768,
  large: 1024,
  xlarge: 1200,
  xxlarge: 1500
};

export const mediaQueries = {
  smallOnly: `@media only screen and (max-width : calc(${breakpoints.medium}px - 1px))`,
  medium: `@media only screen and (min-width: ${breakpoints.medium})`,
  mediumOnly: `@media only screen and (max-width : ${breakpoints.large}) and (min-width:${breakpoints.medium})`,
  mediumDown: `@media only screen and (max-width : calc(${breakpoints.large}px - 1px))`,
  large: `@media only screen and (min-width: ${breakpoints.large})`,
  largeDown: `@media only screen and (max-width : calc(${breakpoints.xlarge}px - 1px))`,
  xlarge: `@media only screen and (min-width: ${breakpoints.xlarge})`,
  xlargeDown: `@media only screen and (max-width : ${breakpoints.xxlarge})`,
  xlargeOnly: `@media only screen and (max-width : ${breakpoints.xxlarge}) and (min-width:${breakpoints.xlarge})`,
  xxlarge: `@media only screen and (min-width: ${breakpoints.xxlarge})`,
};