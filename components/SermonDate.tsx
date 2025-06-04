'use client';

import { use } from 'react';
import { FacebookVideo, formatSermonDate } from '@/utils/facebook';

interface SermonDateProps {
  videoPromise: Promise<FacebookVideo | null>;
}

export default function SermonDate({ videoPromise }: SermonDateProps) {
  const video = use(videoPromise);
  
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      {video ? formatSermonDate(video.created_time) : 'May 17, 2025'}
    </span>
  );
}