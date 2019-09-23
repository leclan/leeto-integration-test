import { rem } from 'polished';

export const defaultFontSize = '16px';

export default (size: number | string) => rem(size, defaultFontSize);
