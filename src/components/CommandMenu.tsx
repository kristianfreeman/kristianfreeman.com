import { useState, useEffect, useMemo } from "react"

import type { CollectionEntry } from "astro:content";
type Post = CollectionEntry<'blog'>;

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

import { Home, Lightbulb, Newspaper, Paperclip } from "lucide-react"
import { SiGithub, SiX, SiYoutube } from "@icons-pack/react-simple-icons"

const LinkItem = ({ href, children, keywords }: { href: string, children: React.ReactNode, keywords?: string[] }) => (
  <CommandItem onSelect={() => window.location.href = href} keywords={keywords}>
    {children}
  </CommandItem>
)

export default function CommandMenu({ posts }: { posts: Post[] }) {
  const [open, setOpen] = useState(false)

  const sortedPosts = useMemo(() => 
    posts.sort(
      (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    ), [posts])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          <LinkItem href="/">
            <Home /> Home
          </LinkItem>
          <LinkItem href="/blog">
            <Newspaper /> Blog
          </LinkItem>
          <LinkItem href="/tags/tip">
            <Lightbulb /> Tips
          </LinkItem>
          <LinkItem href="/links">
            <Paperclip /> Links
          </LinkItem>
        </CommandGroup>
        <CommandGroup heading="Social">
          <LinkItem href="https://twitter.com/kristianf_">
            <SiX />
            @kristianf_ on 𝕏
          </LinkItem>
          <LinkItem href="https://kristianf.dev/youtube">
            <SiYoutube />
            YouTube channel
          </LinkItem>
          <LinkItem href="https://github.com/kristianfreeman">
            <SiGithub />
            @kristianfreeman on GitHub
          </LinkItem>
        </CommandGroup>
        {sortedPosts && (
          <CommandGroup heading="Posts">
            {sortedPosts.map((post) => (
              <LinkItem key={post.slug} href={`/${post.slug}`} keywords={post.data.tags}>
                {post.data.title}
              </LinkItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  )
}
