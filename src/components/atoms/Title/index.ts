import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0;

  font-size: 48px;
  line-height: 1.25;
  font-weight: 500;
  font-family: ${({ theme }) => theme.font.title};
`;
