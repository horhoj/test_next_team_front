import { FC } from 'react';
import styles from './ErrorView.module.scss';
import { ErrorPayload } from '@/store/types';

interface ErrorViewProps {
  error: unknown;
}

export const ErrorView: FC<ErrorViewProps> = ({ error }) => {
  let errorMsg: unknown = null;

  if ((error as ErrorPayload)?.isRequestError) {
    errorMsg = (error as ErrorPayload)?.responseBody;
  } else {
    errorMsg = (error as Error)?.message;
    console.log(error);
  }

  return <div className={styles.wrap}>{JSON.stringify(errorMsg)}</div>;
};
