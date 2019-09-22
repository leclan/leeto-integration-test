import styled from 'styled-components';
import { globalStyle, getMediaQuery } from '../../theme/theme';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${globalStyle.gutterMedium};
  padding-left: ${globalStyle.gutterMedium};

  ${getMediaQuery('large')} {
    max-width: ${globalStyle.width};
  }
`;

export default Container;
