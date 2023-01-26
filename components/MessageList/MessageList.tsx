import { FC } from 'react';
import classNames from 'classnames';
import styles from './MessageList.module.scss';
import { MessageBoardItem } from '@/entityTypes/messageBoard';
import { fontRoboto500 } from '@/styles/fonts';

interface MessageListProps {
  messageList: MessageBoardItem[];
}

export const MessageList: FC<MessageListProps> = ({ messageList }) => {
  return (
    <ul className={styles.ul}>
      {messageList.map((messageItem, index) => (
        <li key={messageItem.id} className={styles.li}>
          <span>#{index + 1}</span>
          <span className={classNames(styles.author)}>
            <span className={fontRoboto500.className}>автор: </span>
            {messageItem.author}
          </span>
          <span className={styles.text}>
            <span className={fontRoboto500.className}>сообщение: </span>
            {messageItem.text}
          </span>
        </li>
      ))}
    </ul>
  );
};
