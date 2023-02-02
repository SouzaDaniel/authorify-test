import styled from 'styled-components';
import { rgb } from 'color';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Action = styled.div`
  background-color: ${({ theme }) =>
    rgb(theme.color.secondary).alpha(0.05).hexa()};

  border-width: 2px;
  border-style: dashed;
  border-color: ${({ theme }) => rgb(theme.color.feedback).alpha(0.1).hexa()};
  border-radius: 0.25rem;
  padding: 1.5rem 1rem;

  transition: all ${({ theme }) => theme.transition.fast};

  cursor: pointer;

  outline: none;

  user-select: none;

  &.active,
  &:focus {
    border-color: ${({ theme }) =>
      rgb(theme.color.feedback).lighten(0.1).alpha(0.25).hexa()};

    background-color: ${({ theme }) =>
      rgb(theme.color.secondary).alpha(0.1).hexa()};

    box-shadow: 0 0 0 0.25rem
      ${({ theme }) => rgb(theme.color.secondary).darken(0.1).alpha(0.1).hexa()};
  }
`;
