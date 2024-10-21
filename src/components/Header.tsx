import HeaderLink from './HeaderLink.tsx';
import { SITE_TITLE } from '../consts';
import { Github, Home, Lightbulb, Notebook, Twitter, Youtube } from 'lucide-react';

export default ({ url }: { url: string }) => (
  <header className="space-y-4">
    <a className="title" href="/">
      <h1>
        {SITE_TITLE}
      </h1>
    </a>

    <nav className="flex items-center gap-8">
      <HeaderLink href="/" astroUrl={url} className="flex items-center gap-2">
        <Home size={24} />
        Home
      </HeaderLink>
      <HeaderLink href="/blog" astroUrl={url} className="flex items-center gap-2">
        <Notebook size={24} />
        Blog
      </HeaderLink>
      <HeaderLink href="/tips" astroUrl={url} className="flex items-center gap-2">
        <Lightbulb size={24} />
        Tips
      </HeaderLink>
      <a href="https://kristianf.dev/youtube" target="_blank" className="flex items-center gap-2">
        <Youtube size={24} />
        YouTube
      </a>
      <a href="https://twitter.com/kristianf_" target="_blank" className="flex items-center gap-2">
        <Twitter size={24} />
        @kristianf_
      </a>
      <a href="https://github.com/kristianfreeman" target="_blank" className="flex items-center gap-2">
        <Github size={24} />
        @kristianfreeman
      </a>
    </nav>
  </header>
)
