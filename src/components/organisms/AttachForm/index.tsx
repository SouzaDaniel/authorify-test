import { useDropzone, ErrorCode } from 'react-dropzone';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { FilePreview } from '../../../contracts/File';
import { IFeedback } from '../../atoms/Feedback/types';

import { Description } from '../../atoms/Description';
import { Title } from '../../atoms/Title';
import { Button } from '../../atoms/Button';
import { Resume } from '../Resume';

import { FormContext } from '../../../store/contexts/Form';

import { createCustomer } from '../../../services/api/customer/create';

import { useRequest } from '../../../hooks/Request';

import {
  Container,
  Header,
  Content,
  Actions,
  Dropzone,
  DropzoneTitle,
  DropzoneDescription,
} from './styles';

export const AttachForm = () => {
  const { setCustomerData, customerData, setStage, stage } =
    useContext(FormContext);

  const { handleRequest, fetching } = useRequest(createCustomer);

  const [feedback, setFeedback] = useState<IFeedback | undefined>(undefined);

  const [files, setFiles] = useState<FilePreview[]>([]);
  const dropzone = useDropzone({
    multiple: false,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    onDropRejected([
      {
        errors: [{ code }],
      },
    ]) {
      let message;

      if (code === ErrorCode.FileInvalidType) {
        message = 'Invalid file type';
      } else if (code === ErrorCode.TooManyFiles) {
        message = 'File too small';
      } else {
        message = 'File not accepted, try again';
      }

      setFeedback({
        message,
        type: 'error',
      });
    },
    onDropAccepted(acceptedFiles) {
      setFeedback(undefined);

      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  useEffect(
    () => () => files.forEach((file) => URL.revokeObjectURL(file.preview)),
    [files]
  );
  useEffect(() => {
    if (files.length > 0) {
      const avatar = files[0];

      setCustomerData((oldValue) => ({
        ...oldValue,
        avatar,
      }));
    }
  }, [files]);

  const avatarURL = useMemo(() => {
    const avatar = customerData?.avatar as FilePreview;

    if (avatar) return avatar.preview;

    return '';
  }, [customerData]);

  const handleBackToContactDetails = () => {
    setStage('INFO');
  };

  const handleBackToUploadAvatar = () => {
    setCustomerData((oldValue) => ({
      ...oldValue,
      avatar: null,
    }));
  };

  const handleSubmit = useCallback(async () => {
    try {
      await handleRequest(customerData);
    } finally {
      setStage('SUCCESS');
    }
  }, [customerData]);

  return (
    <Container stage={stage}>
      <Header>
        <Title>Keep going!</Title>
        <Description>Please now attach your avatar!</Description>
      </Header>
      <Content>
        {avatarURL ? (
          <>
            <Resume />
            <Actions>
              <Button
                outline
                onClick={handleBackToUploadAvatar}
                disabled={fetching}
              >
                Upload again
              </Button>
              <Button onClick={handleSubmit} disabled={fetching}>
                {fetching ? 'Loading...' : 'Submit'}
              </Button>
            </Actions>
          </>
        ) : (
          <>
            <Dropzone feedback={feedback} dropzone={dropzone}>
              <DropzoneTitle>Drop</DropzoneTitle>
              <DropzoneDescription>
                Drag and drop your avatar here!
              </DropzoneDescription>
            </Dropzone>
            <Button outline onClick={handleBackToContactDetails}>
              Back to contact details
            </Button>
          </>
        )}
      </Content>
    </Container>
  );
};
