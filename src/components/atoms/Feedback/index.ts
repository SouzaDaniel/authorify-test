import styled from 'styled-components';

import { FeedbackType } from './types';

interface FeedbackProps {
  type: FeedbackType;
}
export const Feedback = styled.span<FeedbackProps>`
  margin-top: 4px;

  font-size: 12px;
  color: ${({ theme, type }) =>
    type === 'error' ? theme.color.danger : theme.color.success};
`;
