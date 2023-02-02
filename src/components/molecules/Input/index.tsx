import { forwardRef, InputHTMLAttributes, useMemo } from 'react';

import { IFeedback } from '../../atoms/Feedback/types';

import { Feedback } from '../../atoms/Feedback';

import { Container, Control } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  feedback?: IFeedback;
}
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, feedback, placeholder: placeholderProp, ...props }, ref) => {
    const placeholder = useMemo(() => {
      if (placeholderProp) return placeholderProp;

      return label;
    }, [label, placeholderProp]);

    return (
      <Container>
        {label}
        <Control ref={ref} placeholder={placeholder} {...props} />
        {feedback && (
          <Feedback type={feedback.type}>{feedback.message}</Feedback>
        )}
      </Container>
    );
  }
);
Input.defaultProps = {
  feedback: undefined,
};
