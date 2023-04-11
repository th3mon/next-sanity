import { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

export const GradientText = ({ children }: Props): JSX.Element => (
  <span
    className="
      bg-gradient-to-r
      from-orange-400
      via-rose-600
      to-purple-600
      bg-clip-text
      text-transparent
    "
  >
    {children}
  </span>
);
