import { FC } from 'react';
import classNames from 'classnames';
import styles from './AppLayout.module.scss';
import { fontRoboto400 } from '@/styles/fonts';
import { Nav } from '@/components/Nav';

interface AppLayoutProps {
  children: JSX.Element;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={classNames(styles.wrap, fontRoboto400.className)}>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
