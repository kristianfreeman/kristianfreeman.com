import type { CollectionEntry } from 'astro:content';
import clsx from 'clsx';
import HeaderLink from './HeaderLink.tsx';
import { SITE_BRAND } from '../consts';
import { Search } from 'lucide-react';

type BlogPost = CollectionEntry<'blog'>['data'];

export default ({ post, url }: { post?: BlogPost, url: URL }) => {
  return (
    <header className="space-y-4 py-6 max-w-screen-md lg:max-w-screen-lg mx-auto w-full">
      <nav className="flex items-center gap-4">
        <div className="flex-1">
          <a 
            className={clsx("text-white flex-1 font-bold tracking-widest hover:no-underline text-lg bg-slate-900 rounded-md p-2 hover:bg-slate-800 transition-colors")}
            href="/"
          >
            {SITE_BRAND}
          </a>
        </div>

        <div className="flex items-center gap-8 uppercase tracking-wide">
          <HeaderLink active={url.pathname.startsWith("/blog") || !!post} href="/blog">
            Blog
          </HeaderLink>

          <HeaderLink active={url.pathname.startsWith("/links")} className="hidden md:flex" href="/links">
            Links
          </HeaderLink>

          <span className="hidden md:flex items-center gap-1 text-foreground/60">
            <Search size={16} />: ⌘+K
          </span>
        </div>
      </nav>
    </header>
  )
}
