import type { CollectionEntry } from 'astro:content';

import HeaderLink from './HeaderLink.tsx';
import { SITE_TITLE } from '../consts';
import { Github, Home, Lightbulb, Notebook, Twitter, Youtube } from 'lucide-react';

type BlogPost = CollectionEntry<'blog'>['data'];

export default ({ post, url }: { post: BlogPost, url: string }) => (
  <header className="space-y-4">
    <a className="title" href="/">
      {SITE_TITLE}
    </a>

    <nav className="flex items-center gap-4">
      <HeaderLink active={url.pathname === '/'} className="flex items-center gap-2" href="/">
        <Home size={24} />
        Home
      </HeaderLink>

      <HeaderLink active={url.pathname.startsWith("/blog") || post && !post.tags.includes('tip')} className="flex items-center gap-2" href="/blog">
        <Notebook size={24} />
        Blog
      </HeaderLink>

      <HeaderLink active={url.pathname.startsWith("/tags/tip") || post && post.tags.includes('tip')} className="flex items-center gap-2" href="/tags/tip">
        <Lightbulb size={24} />
        Tips
      </HeaderLink>

      <a href="https://twitter.com/kristianf_" target="_blank" className="flex items-center gap-2 nav-link">
        <Twitter size={24} />
        @kristianf_
      </a>

      <a href="https://kristianf.dev/youtube" target="_blank" className="flex items-center gap-2 nav-link">
        <Youtube size={24} />
        YouTube
      </a>

      <a href="https://github.com/kristianfreeman" target="_blank" className="flex items-center gap-2 nav-link">
        <Github size={24} />
        GitHub
      </a>
    </nav>
  </header>
)
