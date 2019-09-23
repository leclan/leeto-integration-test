import { mediaQueries } from '../theme';

export default (size: keyof typeof mediaQueries ) => mediaQueries[size];