import Api from '../api';

export function getList() {
  const request = Api.getList();
  return {
    type: 'BILLING_CYCLE_FETCHED',
    payload: request
  }
}