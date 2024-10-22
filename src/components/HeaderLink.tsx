import clsx from 'clsx';

const HeaderLink = ({ active, children, href, ...props }) => {
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

