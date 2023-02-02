import styled, { css } from 'styled-components';
import { rgb } from 'color';

import { Stage } from '../../store/contexts/Form';

import abstract from '../../assets/abstract.jpg';

interface ContainerProps {
  stage: Stage;
}
export const Container = styled.div<ContainerProps>`
  --box-gap: 16px;
  --columns: 3;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    --columns: 2;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    --columns: 1;

    grid-template-rows: 1fr;

    ${({ stage }) =>
      stage !== 'INFO' &&
      css`
        > :nth-child(1) {
          display: none;
        }
      `}

    ${({ stage }) =>
      stage !== 'ATTACHMENT' &&
      css`
        > :nth-child(2) {
          display: none;
        }
      `}

    &::after {
      content: '';

      position: absolute;
      inset: 0;
      z-index: -1;

      filter: blur(10px) brightness(calc(1 / 3));

      background-image: url(${abstract});
      background-position: center;
      background-size: cover;
    }
  }

  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  align-items: center;
  justify-items: center;

  min-height: 100vh;

  position: relative;

  &::before {
    content: '';

    background-image: url(${abstract});
    background-size: cover;
    background-position: center;

    height: calc(100vh - (var(--box-gap) * 2));
    border-radius: 40px;

    position: absolute;
    z-index: 1000;
    box-shadow: 0 0 var(--box-gap) var(--box-gap)
      ${({ theme }) => rgb(theme.color.secondary).darken(0.5).alpha(0.1).hexa()};

    transition: all ${({ theme }) => theme.transition.slow};

    ${({ stage }) =>
      stage === 'INFO' &&
      css`
        left: calc((100vw / var(--columns)) + var(--box-gap));
        right: var(--box-gap);
      `}

    ${({ stage }) =>
      stage === 'ATTACHMENT' &&
      css`
        left: var(--box-gap);
        right: calc((100vw / var(--columns)) + var(--box-gap));
      `}

    ${({ stage }) =>
      stage === 'SUCCESS' &&
      css`
        left: var(--box-gap);
        right: var(--box-gap);
      `}
  }

  > :nth-child(2) {
    grid-column: var(--columns);
  }
`;
