import type { CollectionEntry } from 'astro:content';
import clsx from 'clsx';
import HeaderLink from './HeaderLink.tsx';
import { SITE_TITLE } from '../consts';
import { Newspaper, Paperclip, Search } from 'lucide-react';

type BlogPost = CollectionEntry<'blog'>['data'];

export default ({ post, url }: { post?: BlogPost, url: URL }) => {
  return (
    <header className="space-y-4 py-8 p-0 md:p-8 w-full">
      <nav className="flex items-center gap-4">
        <div className="flex-1">
          <a className={clsx("text-foreground font-bold flex-1 hover:no-underline")} href="/">
            {SITE_TITLE}
          </a>
        </div>

        <div className="flex items-center gap-8">
          <HeaderLink active={url.pathname.startsWith("/blog") || !!post} href="/blog">
            <Newspaper size={14} />
            Blog
          </HeaderLink>

          <HeaderLink active={url.pathname.startsWith("/links")} className="hidden md:flex" href="/links">
            <Paperclip size={14} />
            Links
          </HeaderLink>

          <span className="hidden md:flex items-center gap-1 text-foreground/60">
            <Search size={16} /> ⌘+K
          </span>
        </div>
      </nav>
    </header>
  )
}
