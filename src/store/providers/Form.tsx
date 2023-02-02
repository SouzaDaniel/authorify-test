import { FunctionComponent, ReactNode, useMemo, useState } from 'react';

import {
  FormContext,
  Stage,
  ICustomerData,
  defaultCustomerData,
  defaultStage,
  IFormContext,
} from '../contexts/Form';

interface Props {
  children: ReactNode;
}
export const FormProvider: FunctionComponent<Props> = ({ children }) => {
  const [stage, setStage] = useState<Stage>(defaultStage);
  const [customerData, setCustomerData] = useState<ICustomerData>({
    ...defaultCustomerData,
  });

  const value: IFormContext = useMemo(
    () => ({
      customerData,
      setCustomerData,
      stage,
      setStage,
    }),
    [customerData, stage]
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
