import { useState, useEffect } from "react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import { Home, Lightbulb, Newspaper, Paperclip } from "lucide-react"
import { SiGithub, SiX, SiYoutube } from "@icons-pack/react-simple-icons"

const LinkItem = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <CommandItem onSelect={() => window.location.href = href}>
    {children}
  </CommandItem>
)

export default function CommandMenu() {
  const [open, setOpen] = useState(false)

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
      </CommandList>
    </CommandDialog>
  )
}

