export type FeedbackType = 'error' | 'success';

export interface IFeedback {
  message: string;
  type: FeedbackType;
}
