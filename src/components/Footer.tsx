import { createElement } from 'react';
import clsx from 'clsx';
import { SiGithub, SiRss, SiX } from "@icons-pack/react-simple-icons"

const links = [
  { href: "https://x.com/kristianf_", icon: SiX },
  { href: "https://github.com/kristianfreeman", icon: SiGithub },
  { href: "https://kristianfreeman.com/rss.xml", icon: SiRss },
]

export default () => {
  const iconClass = clsx("text-foreground/50 hover:text-primary transition-colors duration-300");
  const iconSize = 20;
  const today = new Date();

  return (
    <footer className="flex items-center text-foreground/70 w-full">
      <p className="flex-1">
        &copy; 2012 - {today.getFullYear()} Kristian Freeman. All rights reserved. <a className="text-foreground hover:text-primary transition-colors duration-300 hover:no-underline" href="/colophon">Colophon</a>.
      </p>
      <div className="hidden md:flex gap-4">
        {links.map(({ href, icon }) => (
          <a className={clsx("flex items-center gap-2", iconClass)} href={href} target="_blank" rel="noopener noreferrer">
            {createElement(icon, { size: iconSize })}
          </a>
        ))}
      </div>
    </footer>
  )
}
