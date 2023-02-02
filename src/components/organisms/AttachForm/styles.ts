import styled, { css } from 'styled-components';

import { Stage } from '../../../store/contexts/Form';

import { Dropzone as DropzoneBase } from '../../atoms/Dropzone';

interface ContianerProps {
  stage: Stage;
}
export const Container = styled.div<ContianerProps>`
  min-width: 0;
  max-width: calc(380px + (var(--box-gap) * 2));
  width: 100%;
  padding: var(--box-gap);

  transition: all ${({ theme }) => theme.transition.slow};

  ${({ stage }) =>
    stage !== 'ATTACHMENT' &&
    css`
      opacity: 0;
    `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  text-align: right;

  margin-bottom: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Dropzone = styled(DropzoneBase)`
  text-align: center;

  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const DropzoneTitle = styled.h2`
  margin: 0;
`;

export const DropzoneDescription = styled.p`
  margin: 0;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;

  button {
    flex: 1;
  }
`;
