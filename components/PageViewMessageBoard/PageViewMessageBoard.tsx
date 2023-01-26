import { FC, useEffect } from 'react';
import styles from './PageViewMessageBoard.module.scss';
import { MessageBoardItem } from '@/entityTypes/messageBoard';
import { MessageList } from '@/components/MessageList';
import { fontRoboto700 } from '@/styles/fonts';
import { AddNewMessageForm } from '@/components/AddNewMessageForm';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { messageBoardSlice } from '@/store/messageBoard';

interface PageViewMessageBoard {
  messageFromServer: MessageBoardItem[];
}

export const PageViewMessageBoard: FC<PageViewMessageBoard> = ({
  messageFromServer,
}) => {
  const messagesAddedInTheCurrentSession = useAppSelector(
    messageBoardSlice.selectors.getMessagesAddedInTheCurrentSession,
  );

  const dispatch = useAppDispatch();

  useEffect(
    () => () => {
      dispatch(messageBoardSlice.actions.clear());
    },
    [dispatch],
  );

  const messageList: MessageBoardItem[] = [
    ...messageFromServer,
    ...messagesAddedInTheCurrentSession,
  ];

  return (
    <div className={styles.wrap}>
      <h2 className={fontRoboto700.className}>Список сообщений</h2>
      <MessageList messageList={messageList} />
      <h2 className={fontRoboto700.className}>Добавить новое сообщение</h2>
      <AddNewMessageForm />
    </div>
  );
};
