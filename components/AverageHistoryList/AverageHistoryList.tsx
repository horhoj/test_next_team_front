import { FC, useEffect } from 'react';
import styles from './AverageHistoryList.module.scss';
import { AverageHistoryItem } from '@/entityTypes/averageNumbers';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { averageNumbersSlice } from '@/store/averageNumbers';
import { ErrorView } from '@/components/ErrorView';
import { fontRoboto500, fontRoboto700 } from '@/styles/fonts';

export const AverageHistoryList: FC = () => {
  const dispatch = useAppDispatch();

  const fetchHistoryRequest = useAppSelector(
    averageNumbersSlice.selectors.getFetchHistoryRequest,
  );

  const localHistory = useAppSelector(
    averageNumbersSlice.selectors.getLocalHistory,
  );

  useEffect(() => {
    dispatch(averageNumbersSlice.thunks.fetchHistoryThunk());
  }, []);

  const averageHistory: AverageHistoryItem[] = [
    ...localHistory.slice().reverse(),
    ...(fetchHistoryRequest.data ?? []).slice().reverse(),
  ];

  return (
    <div className={styles.wrap}>
      <div className={fontRoboto700.className}>История</div>
      <>
        {fetchHistoryRequest.error && (
          <ErrorView error={fetchHistoryRequest.error} />
        )}
      </>
      <>
        {averageHistory.map((historyItem) => (
          <div key={historyItem.id} className={styles.historyItem}>
            <div>
              <span className={fontRoboto500.className}>Введено: </span>
              {historyItem.current}
            </div>
            <div>
              <span className={fontRoboto500.className}>Предыдущее: </span>
              {historyItem.prev ?? 'нет предыдущего числа!'}
            </div>
            <div>
              <span className={fontRoboto500.className}>Среднее: </span>
              {historyItem.average ?? 'нет предыдущего числа!'}
            </div>
          </div>
        ))}
      </>
      <>{averageHistory.length === 0 && <div>Нет данных для вывода</div>}</>
    </div>
  );
};
