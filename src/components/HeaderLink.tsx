import clsx from 'clsx';

type HeaderLinkProps = {
  active?: boolean;
  className?: string;
  children: React.ReactNode;
  href: string;
};

const HeaderLink = ({ active, children, href, ...props }: HeaderLinkProps) => {
  return (
    <a
      href={href}
      className={clsx(props.className, 'nav-link', `${active ? 'active' : ''}`, props.className)}
    >
      {children}
    </a>
  );
};

export default HeaderLink;

