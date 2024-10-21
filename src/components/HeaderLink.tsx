const HeaderLink = ({ href, astroUrl, children, ...props }) => {
  const pathname = astroUrl.pathname;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === '/' + subpath?.[0];

  return (
    <a
      href={href}
      className={`${isActive ? 'active' : ''}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default HeaderLink;

