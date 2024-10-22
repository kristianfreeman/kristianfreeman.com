import type { CollectionEntry } from 'astro:content';

import HeaderLink from './HeaderLink.tsx';
import { SITE_TITLE } from '../consts';

import { Home, Lightbulb, Notebook } from 'lucide-react';
import { SiYoutube, SiX, SiGithub } from '@icons-pack/react-simple-icons';

type BlogPost = CollectionEntry<'blog'>['data'];

export default ({ post, url }: { post?: BlogPost, url: URL }) => (
  <header className="space-y-4 mb-12">
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

      <a href="https://twitter.com/kristianf_" target="_blank" className="hidden md:flex items-center gap-2 nav-link">
        <SiX size={24} />
        @kristianf_
      </a>

      <a href="https://kristianf.dev/youtube" target="_blank" className="hidden md:flex items-center gap-2 nav-link">
        <SiYoutube size={24} />
        YouTube
      </a>

      <a href="https://github.com/kristianfreeman" target="_blank" className="hidden md:flex items-center gap-2 nav-link">
        <SiGithub size={24} />
        GitHub
      </a>
    </nav>
  </header>
)
