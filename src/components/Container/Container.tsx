import styled from 'styled-components';
import { globalStyle, getMediaQuery } from '../../theme/theme';

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${globalStyle.gutterMedium};
  padding-left: ${globalStyle.gutterMedium};

  ${getMediaQuery('large')} {
    max-width: ${globalStyle.width};
  }
`;

export default Container;
