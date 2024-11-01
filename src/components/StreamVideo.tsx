import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Stream } from "@cloudflare/stream-react";

export default function StreamVideo({ src }: { src: string }) {
  const [animationDelayComplete, setAnimationDelayComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationDelayComplete(true);
    }, 500);
  }, []);

  if (!animationDelayComplete) {
    return <Skeleton className="md:h-[400px] rounded-none w-full" />
  };

  return (
    <div className="md:h-[400px] w-full">
      <Stream
        controls
        defaultTextTrack="en"
        src={src}
      />
    </div>
  );
}
