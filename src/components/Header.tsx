import type { CollectionEntry } from 'astro:content';
import clsx from 'clsx';
import HeaderLink from './HeaderLink.tsx';
import { SITE_BRAND } from '../consts';
import { Search } from 'lucide-react';

type BlogPost = CollectionEntry<'blog'>['data'];

export default ({ post, url }: { post?: BlogPost, url: URL }) => {
  return (
    <header className="space-y-4 py-6 max-w-md lg:max-w-lg mx-auto w-full">
      <nav className="flex items-center gap-4">
        <div className="flex-1">
          <a 
            className={clsx("text-primary-foreground flex-1 font-medium tracking-wide hover:no-underline text-lg bg-primary rounded-md p-2 hover:bg-primary/80 transition-colors duration-300")}
            href="/"
          >
            {SITE_BRAND}
          </a>
        </div>

        <div className="flex items-center gap-4 tracking-wide">
          <HeaderLink active={url.pathname.startsWith("/blog") || !!post} href="/blog">
            Blog
          </HeaderLink>

          <HeaderLink active={url.pathname.startsWith("/about")} className="hidden md:flex" href="/about">
            About
          </HeaderLink>

          <HeaderLink active={url.pathname.startsWith("/projects")} className="hidden md:flex" href="/projects">
            Projects
          </HeaderLink>

          <HeaderLink active={url.pathname.startsWith("/links")} className="hidden md:flex" href="/links">
            Links
          </HeaderLink>

          <span className="hidden md:flex items-center text-foreground/70">
            <Search size={16} className="mr-1.5" />
            <span>⌘K</span>
          </span>
        </div>
      </nav>
    </header>
  )
}
