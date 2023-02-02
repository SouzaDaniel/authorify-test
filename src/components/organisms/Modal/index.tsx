import { useContext } from 'react';

import { Button } from '../../atoms/Button';
import { Resume } from '../Resume';

import { FormContext } from '../../../store/contexts/Form';

import { Backdrop, Container, Header, Title, Description } from './styles';

export const Modal = () => {
  const { stage, setCustomerData, setStage } = useContext(FormContext);

  const handleStartForm = () => {
    setTimeout(() => {
      setCustomerData({
        firstName: '',
        email: '',
        avatar: null,
      });
    }, 1000);

    setStage('INFO');
  };

  return (
    <Backdrop stage={stage}>
      <Container>
        <Header>
          <Title>Perfect! 🎉</Title>
          <Description>
            <p>
              We received your contact information{' '}
              <span className="success">successfully</span> and you can check it
              here below. 👇
            </p>
            <p>Soon we will get back to you, see you later!👋</p>
          </Description>
        </Header>
        <Resume />
        <Button variant="success" outline onClick={handleStartForm}>
          Bye!
        </Button>
      </Container>
    </Backdrop>
  );
};
