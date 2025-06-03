"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";

const YouTubeVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-5xl aspect-video mx-auto my-10 rounded-xl overflow-hidden shadow-lg">
      {!isPlaying ? (
        <>
          {/* Custom Thumbnail Image */}
          <img
            src="/images/video.jpg" // Your own thumbnail here
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          {/* Play Button Overlay */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-all"
          >
            <PlayCircle className="w-20 h-20 text-white" />
          </button>
        </>
      ) : (
        // Embedded YouTube Video
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/r34Lza4wXQQ?autoplay=1&rel=0&modestbranding=1&playsinline=1"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeVideoPlayer;
