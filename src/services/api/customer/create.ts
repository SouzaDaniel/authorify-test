import { api } from '..';

import { ICustomerData } from '../../../store/contexts/Form';

interface RequestResponse {
  status: string;
}

export const createCustomer: (
  customer: ICustomerData
) => Promise<RequestResponse> = async (customer) => {
  const { data } = await api.postForm<RequestResponse>('/customers', customer);

  return data;
};
