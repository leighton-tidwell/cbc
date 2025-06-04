'use client';

import { use } from 'react';
import { FacebookVideo, extractSermonTitle } from '@/utils/facebook';

interface SermonTitleProps {
  videoPromise: Promise<FacebookVideo | null>;
}

export default function SermonTitle({ videoPromise }: SermonTitleProps) {
  const video = use(videoPromise);

  if (!video) return null;

  return (
    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-color mb-8">
      {extractSermonTitle(video)}
    </h3>
  );
}
