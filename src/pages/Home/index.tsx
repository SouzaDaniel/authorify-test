import { useContext } from 'react';

import { FormContext } from '../../store/contexts/Form';

import { Modal } from '../../components/organisms/Modal';
import { InfoForm } from '../../components/organisms/InfoForm';
import { AttachForm } from '../../components/organisms/AttachForm';

import { Container } from './styles';

export const Page = () => {
  const { stage } = useContext(FormContext);

  return (
    <Container stage={stage}>
      <InfoForm />
      <AttachForm />
      <Modal />
    </Container>
  );
};
