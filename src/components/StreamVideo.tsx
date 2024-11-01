import { Stream } from "@cloudflare/stream-react";

export default function StreamVideo({ src }: { src: string }) {
  return (
    <div className="mt-4">
      <Stream
        controls
        defaultTextTrack="en"
        src={src}
      />
    </div>
  );
}
