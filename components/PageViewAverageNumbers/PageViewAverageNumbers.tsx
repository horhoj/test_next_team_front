import { FC, useEffect } from 'react';
import styles from './PageViewAverageNumbers.module.scss';
import { AddAverageForm } from '@/components/AddAverageForm';
import { fontRoboto700 } from '@/styles/fonts';
import { AverageHistoryList } from '@/components/AverageHistoryList';
import { useAppDispatch } from '@/store/hooks';
import { averageNumbersSlice } from '@/store/averageNumbers';

export const PageViewAverageNumbers: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(
    () => () => {
      dispatch(averageNumbersSlice.actions.clear());
    },
    [],
  );

  return (
    <div className={styles.wrap}>
      <h2 className={fontRoboto700.className}>Работа со средними числами</h2>
      <AddAverageForm />
      <AverageHistoryList />
    </div>
  );
};
