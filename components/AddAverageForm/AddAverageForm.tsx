import { FC, useState, SyntheticEvent } from 'react';
import styles from './AddAverageForm.module.scss';
import { Input } from '@/components/Input';
import {
  getCurrentValue,
  getNewIntegerValue,
} from '@/components/AddAverageForm/helper';
import { Button } from '@/components/Button';
import { fontRoboto700 } from '@/styles/fonts';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { averageNumbersSlice } from '@/store/averageNumbers';
import { ErrorView } from '@/components/ErrorView';

export const AddAverageForm: FC = () => {
  const [integerPartOfNumber, setIntegerPartOfNumber] = useState<number>(0);
  const [isNegativeNumber, setIsNegativeNumber] = useState<boolean>(false);
  const [isHasFractionalPart, setIsHasFractionalPart] =
    useState<boolean>(false);
  const [fractionalPartOfNumber, setFractionalPartOfNumber] =
    useState<number>(0);

  const addAverageRequest = useAppSelector(
    averageNumbersSlice.selectors.getAddAverageRequest,
  );

  const dispatch = useAppDispatch();

  const currentValue = getCurrentValue({
    isHasFractionalPart,
    fractionalPartOfNumber,
    integerPartOfNumber,
    isNegativeNumber,
  });

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const successCb = () => {
      setIntegerPartOfNumber(0);
      setIsHasFractionalPart(false);
      setFractionalPartOfNumber(0);
      setIsNegativeNumber(false);
    };
    dispatch(
      averageNumbersSlice.thunks.addAverageThunk({
        successCb,
        value: currentValue,
      }),
    );
  };

  return (
    <form
      className={styles.wrap}
      noValidate
      autoComplete={'off'}
      onSubmit={handleSubmit}
    >
      <>
        {addAverageRequest.error && (
          <ErrorView error={addAverageRequest.error} />
        )}
      </>
      <div className={fontRoboto700.className}>
        Создайте число. Текущее число: {currentValue}
      </div>

      <div className={styles.field}>
        <label>Целая часть числа</label>
        <Input
          value={integerPartOfNumber}
          onChange={(e) =>
            setIntegerPartOfNumber((prev) =>
              getNewIntegerValue(prev, e.target.value),
            )
          }
          maxLength={14}
        />
      </div>
      <div className={styles.fieldRow}>
        <Input
          type="checkbox"
          className={styles.clientValidationCheckBox}
          checked={isNegativeNumber}
          onChange={(e) => setIsNegativeNumber(e.target.checked)}
        />
        Установите если число отрицательное
      </div>
      <div className={styles.fieldRow}>
        <Input
          type="checkbox"
          className={styles.clientValidationCheckBox}
          checked={isHasFractionalPart}
          onChange={(e) => setIsHasFractionalPart(e.target.checked)}
        />
        Установите если число имеет дробную часть
      </div>
      {isHasFractionalPart && (
        <div className={styles.field}>
          <label>Дробная часть числа</label>
          <Input
            value={fractionalPartOfNumber}
            onChange={(e) =>
              setFractionalPartOfNumber((prev) =>
                getNewIntegerValue(prev, e.target.value),
              )
            }
            maxLength={10}
          />
        </div>
      )}
      <div className={styles.controlPanelWrap}>
        <Button type={'submit'}>Отправить</Button>
      </div>
    </form>
  );
};
