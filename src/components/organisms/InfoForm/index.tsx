import { useCallback, useContext, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormContext } from '../../../store/contexts/Form';

import { IFeedback } from '../../atoms/Feedback/types';
import { IFields } from '../../../validation/infoForm/types';

import { schema } from '../../../validation/infoForm';

import { Button } from '../../atoms/Button';
import { Description } from '../../atoms/Description';
import { Title } from '../../atoms/Title';
import { Input } from '../../molecules/Input';

import { Container, Header, Form } from './styles';

export const InfoForm = () => {
  const { customerData, setCustomerData, setStage, stage } =
    useContext(FormContext);

  const {
    register,
    formState,
    handleSubmit: submit,
    reset,
  } = useForm<IFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: customerData.email,
      firstName: customerData.firstName,
    },
  });

  useEffect(() => {
    if (stage === 'SUCCESS') {
      reset();
    }
  }, [stage]);

  const handleFeedback: (field: keyof IFields) => IFeedback | undefined =
    useCallback(
      (field) => {
        const { errors } = formState;

        if (errors[field]) {
          return {
            type: 'error',
            message: errors[field]!.message!,
          };
        }

        return undefined;
      },
      [formState]
    );

  const handleSubmit = submit((data) => {
    setCustomerData((oldValue) => ({
      ...oldValue,
      ...data,
    }));

    setStage('ATTACHMENT');
  });

  const canSubmit = useMemo(() => {
    const { errors, isSubmitting } = formState;

    return Object.keys(errors).length === 0 && !isSubmitting;
  }, [formState]);

  return (
    <Container stage={stage}>
      <Header>
        <Title>Welcome</Title>
        <Description>Please enter your contact details to connect.</Description>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Input
          label="First Name"
          feedback={handleFeedback('firstName')}
          {...register('firstName')}
        />
        <Input
          label="Email Address"
          feedback={handleFeedback('email')}
          {...register('email')}
        />
        <Button type="submit" disabled={!canSubmit}>
          Next Step
        </Button>
      </Form>
    </Container>
  );
};
