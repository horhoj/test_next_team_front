import { FC } from 'react';
import styles from './PageViewMessageBoard.module.scss';
import { MessageBoardItem } from '@/entityTypes/messageBoard';
import { MessageList } from '@/components/MessageList';
import { fontRoboto700 } from '@/styles/fonts';

interface PageViewMessageBoard {
  messageFromServer: MessageBoardItem[];
}

export const PageViewMessageBoard: FC<PageViewMessageBoard> = ({
  messageFromServer,
}) => {
  const messageList = [...messageFromServer];

  return (
    <div className={styles.wrap}>
      <h1 className={fontRoboto700.className}>Список сообщений</h1>
      <MessageList messageList={messageList} />
    </div>
  );
};
