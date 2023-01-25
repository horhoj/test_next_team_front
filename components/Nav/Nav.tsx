import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './Nav.module.scss';
import { AppRoutes } from '@/config/routes';
import { fontRoboto700 } from '@/styles/fonts';

export const Nav: FC = () => {
  const router = useRouter();

  const getLinkProps = (link: string) => ({
    href: link,
    className: classNames(
      styles.link,
      router.asPath === link && styles.active,
      router.asPath === link && fontRoboto700.className,
    ),
  });

  return (
    <nav className={styles.wrap}>
      <ul>
        <li>
          <Link {...getLinkProps(AppRoutes.MESSAGE_BOARDS)}>
            Доска сообщений
          </Link>
        </li>
        <li>
          <Link {...getLinkProps(AppRoutes.AVERAGE_NUMBERS)}>
            Средние числа
          </Link>
        </li>
      </ul>
    </nav>
  );
};
