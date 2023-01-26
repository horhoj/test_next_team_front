import React, { FC, useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
import styles from './Spinner.module.scss';
import { Portal } from '@/components/Portal';
import { useAppSelector } from '@/store/hooks';
import { messageBoardSlice } from '@/store/messageBoard';

export const Spinner: FC = () => {
  const messageBoardIsLoading = useAppSelector(
    messageBoardSlice.selectors.getIsLoading,
  );

  const isLoading = messageBoardIsLoading;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <Portal>
      <CSSTransition
        in={isLoading}
        nodeRef={ref}
        timeout={100}
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <div className={styles.Spinner} ref={ref} />
      </CSSTransition>
    </Portal>
  );
};
