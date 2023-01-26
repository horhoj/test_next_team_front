import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './AddNewMessageForm.module.scss';
import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';
import { Button } from '@/components/Button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { messageBoardSlice } from '@/store/messageBoard';
import { ErrorView } from '@/components/ErrorView';

interface FormValues {
  author: string;
  text: string;
}

const INITIAL_VALUES: FormValues = {
  author: '',
  text: '',
};

const validationSchema = yup.object({
  author: yup.string().required('Не введено имя автора!'),
  text: yup.string().required('Не введено сообщение!'),
});

export const AddNewMessageForm: FC = () => {
  const dispatch = useAppDispatch();
  const [isClientValidation, setIsClientValidation] = useState<boolean>(true);

  const addNewMessageRequest = useAppSelector(
    messageBoardSlice.selectors.getAddNewMessageRequest,
  );

  const formikParams = isClientValidation
    ? ({ validationSchema } as const)
    : {};

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      dispatch(
        messageBoardSlice.thunks.addNewMessageThunk({
          data: values,
          successCb: () => {
            formik.resetForm();
          },
        }),
      );
    },
    ...formikParams,
  });

  return (
    <div className={styles.wrap}>
      <>
        {addNewMessageRequest.error && (
          <ErrorView error={addNewMessageRequest.error} />
        )}
      </>
      <form
        onSubmit={formik.handleSubmit}
        noValidate
        autoComplete={'off'}
        className={styles.wrap}
      >
        <div className={styles.fieldRow}>
          <Input
            type="checkbox"
            className={styles.clientValidationCheckBox}
            checked={isClientValidation}
            onChange={(e) => setIsClientValidation(e.target.checked)}
          />
          Установите для предварительной клиентской валидации
        </div>
        <div className={styles.field}>
          <label>Автор</label>
          <Input
            type="text"
            placeholder={'Введите имя'}
            {...formik.getFieldProps('author')}
          />
          {Boolean(formik.touched.author) && Boolean(formik.errors.author) && (
            <div className={styles.msgError}>{formik.errors.author}</div>
          )}
        </div>

        <div className={styles.field}>
          <label>Текст сообщения</label>
          <TextArea
            placeholder={'Введите текст сообщения'}
            {...formik.getFieldProps('text')}
          />
          {Boolean(formik.touched.text) && Boolean(formik.errors.text) && (
            <div className={styles.msgError}>{formik.errors.text}</div>
          )}
        </div>

        <div className={styles.controlPanelWrap}>
          <Button type={'submit'}>Отправить</Button>
        </div>
      </form>
    </div>
  );
};
