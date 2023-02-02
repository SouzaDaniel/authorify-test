import styled from 'styled-components';
import { rgb } from 'color';

export const Input = styled.input`
  padding: 12px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => rgb(theme.color.feedback).alpha(0.1).hexa()};
  border-radius: 8px;

  font-weight: 500;

  background-color: ${({ theme }) =>
    rgb(theme.color.secondary).alpha(0.1).hexa()};

  transition: all ${({ theme }) => theme.transition.fast};

  &:focus {
    border-color: ${({ theme }) => rgb(theme.color.feedback).alpha(0.2).hexa()};

    background-color: ${({ theme }) =>
      rgb(theme.color.secondary).alpha(0.15).hexa()};
  }
`;
