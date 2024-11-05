import clsx from 'clsx';
import { useMemo } from 'react';

type HeaderLinkProps = {
  active?: boolean;
  className?: string;
  children: React.ReactNode;
  href: string;
};

const HeaderLink = ({ active, children, href, ...props }: HeaderLinkProps) => {
  const className = useMemo(() => {
    return clsx(
      props.className,
      'flex items-center gap-2',
      'hover:no-underline hover:text-primary transition-colors',
      `${active ? 'text-foreground' : 'text-foreground/60'}`
    )
  }, [active, props.className]);

  return (
    <a
      href={href}
      className={className}
    >
      {children}
    </a>
  );
};

export default HeaderLink;

