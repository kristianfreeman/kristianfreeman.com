import { useEffect, useState } from "react";
import clsx from "clsx";
import { Bookmark } from "lucide-react";

type Heading = {
  depth: number;
  text: string;
  slug: string;
};

export default function TOC({ headings }: { headings: Heading[] }) {
  if (headings.length < 2) return null;

  // Track active header via interaction observer and set a class based on it
  const [activeHeader, setActiveHeader] = useState<Heading | null>(null);

  useEffect(() => {
    const config = {
      rootMargin: '0px',
      threshold: [0, 0.5, 1]
    }

    const observer = new IntersectionObserver((entries) => {
      let closestEntry: IntersectionObserverEntry | null = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check if this entry is the closest visible one
          const { top } = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;

          // Only consider entries that are within the viewport
          if (top >= 0 && top <= viewportHeight) {
            // Prioritize the entry that is closest to the top of the viewport
            if (!closestEntry || top < closestEntry.boundingClientRect.top) {
              closestEntry = entry;
            }
          }
        }
      });

      if (closestEntry) {
        const heading = headings.find((heading) => heading.slug === closestEntry!.target.id);
        if (heading) {
          setActiveHeader(heading);
        }
      }
    }, config);

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (!element) return;
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  return (
    <div className="border-l border-l-text-foreground pl-4 ml-8 mt-4 top-32 h-fit overflow-y hidden lg:block sticky">
      <p className="flex gap-2 items-center text-foreground/40 mb-2 cursor-default select-none">
        <Bookmark size={16} />
        Sections
      </p>

      <ul className="list-none space-y-2">
        {headings.map((heading) => (
          <li key={heading.slug}>
            <a
              className={clsx(
                "transition-colors duration-300 ease-in-out",
                "hover:text-foreground",
                activeHeader?.slug === heading.slug ? "text-foreground" : "text-foreground/40"
              )}
              href={`#${heading.slug}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
