import { useEffect, useState } from "react";
import clsx from "clsx";
import { Bookmark } from "lucide-react";

type Heading = {
  depth: number;
  text: string;
  slug: string;
};

export default function TOC({ headings }: { headings: Heading[] }) {

  // Track active header via interaction observer and set a class based on it
  const [activeHeader, setActiveHeader] = useState<Heading | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const heading = headings.find((heading) => heading.slug === entry.target.id);
          if (!heading) return;
          setActiveHeader(heading);
        }
      });
    });

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
    <div className="border-l border-l-text-foreground pl-4 ml-8 mt-4 top-32 h-fit overflow-y hidden md:block sticky">
      <p className="flex gap-2 items-center text-foreground/40 mb-2 select-none">
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
