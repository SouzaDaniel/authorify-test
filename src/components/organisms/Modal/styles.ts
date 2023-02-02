import styled, { css, keyframes } from 'styled-components';
import { rgb } from 'color';

import { Stage } from '../../../store/contexts/Form';

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

interface BackdropProps {
  stage: Stage;
}
export const Backdrop = styled.div<BackdropProps>`
  animation: ${show} ${({ theme }) => theme.transition.slow};

  ${({ stage }) =>
    stage !== 'SUCCESS' &&
    css`
      opacity: 0;
      visibility: hidden;
    `}

  padding: var(--box-gap);

  position: fixed;
  inset: 0;
  z-index: 1010;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all ${({ theme }) => theme.transition.fast};

  background-color: ${({ theme }) =>
    rgb(theme.color.background).alpha(0.8).hexa()};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 380px;
  padding: 24px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) =>
    rgb(theme.color.feedback)
      .darken((1 / 3) * 2)
      .hex()};

  background-color: ${({ theme }) =>
    rgb(theme.color.background).alpha(0.9).hexa()};

  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Header = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Title = styled.h2`
  margin: 0;

  font-family: ${({ theme }) => theme.font.title};
`;

export const Description = styled.div`
  font-size: 12px;

  display: flex;
  flex-direction: column;
  row-gap: 8px;

  .success {
    color: ${({ theme }) => theme.color.success};
  }

  p {
    margin: 0;
  }
`;
