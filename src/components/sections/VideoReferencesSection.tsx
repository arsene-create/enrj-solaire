"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Play, X, Volume2, VolumeX } from "lucide-react";
import { videos } from "@/data/videos";

export default function VideoReferencesSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideo = useCallback((src: string) => {
    setActiveVideo(src);
    setMuted(true);
  }, []);

  const closeVideo = useCallback(() => {
    setActiveVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {videos.map((video, i) => (
          <button
            key={video.id}
            onClick={() => openVideo(video.src)}
            className="group text-left bg-white rounded-2xl overflow-hidden shadow-md border border-border/30 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-muted overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg">
                  <Play className="w-6 h-6 text-foreground group-hover:text-white ml-0.5" />
                </div>
              </div>
              {/* Type badge */}
              <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                {video.type}
              </div>
            </div>
            {/* Info */}
            <div className="p-4">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                {video.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {video.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={activeVideo}
              autoPlay
              muted={muted}
              playsInline
              controls
              className="w-full h-full object-contain bg-black"
            />
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute top-3 right-3 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Mute toggle */}
            <button
              onClick={toggleMute}
              className="absolute bottom-3 right-3 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
            >
              {muted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
