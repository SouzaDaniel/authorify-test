import { useContext, useMemo } from 'react';

import { FormContext } from '../../../store/contexts/Form';

import { FilePreview } from '../../../contracts/File';

import { Container, Avatar, Details, Field, Label, Value } from './styles';

export const Resume = () => {
  const { customerData } = useContext(FormContext);

  const avatarURL = useMemo(() => {
    const avatar = customerData.avatar as FilePreview;

    const preview = avatar?.preview || '';

    return preview;
  }, [customerData]);

  const firstName = useMemo(() => customerData.firstName, [customerData]);
  const email = useMemo(() => customerData.email, [customerData]);

  return (
    <Container>
      <Avatar src={avatarURL} alt={firstName} />
      <Details>
        <Field>
          <Label>Name</Label>
          <Value>{firstName}</Value>
        </Field>
        <Field>
          <Label>Email</Label>
          <Value>{email}</Value>
        </Field>
      </Details>
    </Container>
  );
};
