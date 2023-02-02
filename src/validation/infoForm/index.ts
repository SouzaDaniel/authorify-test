import { SchemaOf, object, string } from 'yup';

import { IFields } from './types';

export const schema: SchemaOf<IFields> = object().shape({
  firstName: string().required('First name is required'),
  email: string()
    .email('Please enter a valid email address')
    .required('Email is required'),
});
