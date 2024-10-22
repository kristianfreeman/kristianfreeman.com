import type { CollectionEntry } from 'astro:content';

import HeaderLink from './HeaderLink.tsx';
import { SITE_TITLE } from '../consts';

type BlogPost = CollectionEntry<'blog'>['data'];

export default ({ post, url }: { post?: BlogPost, url: URL }) => (
  <header className="space-y-4 mb-12">
    <nav className="flex items-center gap-4">
      <a className="font-bold flex-1 text-primary" href="/">
        {SITE_TITLE}
      </a>

      <HeaderLink active={url.pathname.startsWith("/blog") || post && !post.tags.includes('tip')} href="/blog">
        Blog
      </HeaderLink>

      <HeaderLink active={url.pathname.startsWith("/tags/tip") || post && post.tags.includes('tip')} className="hidden md:block" href="/tags/tip">
        Tips
      </HeaderLink>

      <a href="https://twitter.com/kristianf_" target="_blank" className="nav-link hidden md:block">
        @kristianf_
      </a>

      <a href="https://kristianf.dev/youtube" target="_blank" className="nav-link hidden md:block">
        YouTube
      </a>

      <a href="https://github.com/kristianfreeman" target="_blank" className="nav-link hidden md:block">
        GitHub
      </a>
    </nav>
  </header>
)
