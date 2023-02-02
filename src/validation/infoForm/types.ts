import { ICustomerData } from '../../store/contexts/Form';

export type IFields = Pick<ICustomerData, 'firstName' | 'email'>;
