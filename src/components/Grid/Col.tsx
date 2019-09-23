import styled from 'styled-components';

type GridColProps = {
  span?: string;
};

const Col = styled.div<GridColProps>`
  flex: ${props => {
    if (props.span === 'shrink') return '0 0 auto'
    if (props.span === 'auto') return '1 1 0px'
    return '1 1 0px'
  }};
  width: auto;
`;

export default Col;
