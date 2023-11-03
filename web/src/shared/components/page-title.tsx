import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

export function PageTitle({ children, title }: Props) {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = 'Channel Ranks';
    }
  }, [title]);

  return <>{ children }</>;
}
