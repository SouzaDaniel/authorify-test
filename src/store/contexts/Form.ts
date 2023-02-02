import { createContext } from 'react';

import { SetState } from '../../contracts/State';

export type Stage = 'INFO' | 'ATTACHMENT' | 'SUCCESS';

export interface ICustomerData {
  firstName: string;
  email: string;
  avatar: any;
}

export interface IFormContext {
  stage: Stage;
  setStage: SetState<Stage>;
  customerData: ICustomerData;
  setCustomerData: SetState<ICustomerData>;
}

export const defaultCustomerData: ICustomerData = {
  avatar: null,
  email: '',
  firstName: '',
};

export const defaultStage: Stage = 'INFO';

const defaultFormContext: IFormContext = {
  customerData: defaultCustomerData,
  setCustomerData: () => {},
  stage: defaultStage,
  setStage: () => {},
};

export const FormContext = createContext<IFormContext>(defaultFormContext);
