import Api from '../api';

export function getSummary() {
  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: Api.getSummary()
  }
}