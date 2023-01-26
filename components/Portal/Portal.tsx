import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: JSX.Element;
}

export const Portal: FC<PortalProps> = ({ children }) =>
  typeof window !== 'undefined' ? createPortal(children, document.body) : null;
