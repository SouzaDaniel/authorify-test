import cn from 'classnames';
import { FunctionComponent, HTMLAttributes } from 'react';
import { DropzoneState } from 'react-dropzone';

import { IFeedback } from '../Feedback/types';

import { Feedback } from '../Feedback';

import { Container, Action } from './styles';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  dropzone: DropzoneState;
  feedback?: IFeedback;
}
export const Dropzone: FunctionComponent<Props> = ({
  dropzone,
  className,
  feedback,
  children,
  ...props
}) => {
  const { getRootProps, getInputProps, isDragActive: active } = dropzone;

  return (
    <Container>
      <Action
        {...getRootProps({
          className: cn(
            {
              active,
            },
            className
          ),
          ...props,
        })}
      >
        <input {...getInputProps()} />
        {children}
      </Action>
      {feedback && <Feedback type={feedback.type}>{feedback.message}</Feedback>}
    </Container>
  );
};
Dropzone.defaultProps = {
  feedback: undefined,
};
