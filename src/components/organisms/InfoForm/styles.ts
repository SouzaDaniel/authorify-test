import styled, { css } from 'styled-components';

import { Stage } from '../../../store/contexts/Form';

interface ContainerProps {
  stage: Stage;
}
export const Container = styled.div<ContainerProps>`
  min-width: 0;
  max-width: calc(380px + (var(--box-gap) * 2));
  width: 100%;
  padding: var(--box-gap);

  transition: all ${({ theme }) => theme.transition.slow};

  ${({ stage }) =>
    stage !== 'INFO' &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-bottom: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
