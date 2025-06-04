'use client';

import { useState } from 'react';
import { formatSermonDate, extractSermonTitle } from '@/utils/facebook';
import VideoModal from './VideoModal';

interface SermonCardProps {
  video: {
    id: string;
    description?: string;
    title?: string;
    permalink_url: string;
    created_time: string;
    source?: string;
    picture?: string;
  };
}

export default function SermonCard({ video }: SermonCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="sermon-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Video/Thumbnail Container */}
        <div className="relative aspect-video bg-gray-100 overflow-hidden">
          {/* Video Thumbnail */}
          {video.picture ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={video.picture}
              alt={extractSermonTitle(video)}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to gray background if thumbnail fails
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
          )}

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300">
            <button
              onClick={() => setShowModal(true)}
              className="group w-20 h-20 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Play video"
            >
              <svg
                className="w-10 h-10 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sermon Info */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <svg
              className="w-4 h-4 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm text-text-light">
              {formatSermonDate(video.created_time)}
            </span>
          </div>

          <h3 className="text-xl font-heading font-bold text-text-color mb-4 line-clamp-2">
            {extractSermonTitle(video)}
          </h3>

          <a
            href={video.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Watch on Facebook
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        videoUrl={video.permalink_url}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
