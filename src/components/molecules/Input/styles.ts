import styled from 'styled-components';

import { Input as InputBase } from '../../atoms/Input';

export const Container = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: 600;
`;

export const Control = styled(InputBase)`
  margin-top: 8px;
`;
