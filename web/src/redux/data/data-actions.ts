import { Action } from 'redux';

export const PLACEHOLDER_A = 'PLACEHOLDER_A';
export interface PlaceholderAction extends Action<typeof PLACEHOLDER_A> {
  placeholder: null;
}
export const setUserNotificationsAction = (placeholder: null) => {
  return {
    type: PLACEHOLDER_A,
    placeholder
  };
};

export type DataAction = PlaceholderAction;
