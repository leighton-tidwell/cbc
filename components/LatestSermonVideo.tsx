'use client';

import { FacebookVideo } from '@/utils/facebook';
import { useEffect, useState, useRef, use } from 'react';
import VideoLoadingState from './VideoLoadingState';

interface LatestSermonVideoProps {
  videoPromise: Promise<FacebookVideo | null>;
}

export default function LatestSermonVideo({
  videoPromise,
}: LatestSermonVideoProps) {
  const video = use(videoPromise);
  const videoUrl = video?.permalink_url;

  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 800, height: 450 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: process.env.NEXT_PUBLIC_FB_APP_ID,
          xfbml: true,
          version: 'v18.0',
        });
        window.FB.XFBML.parse();
      };

      // Load the SDK asynchronously
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Calculate dimensions based on container size
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        // Use actual container dimensions, with some constraints
        setDimensions({
          width: Math.floor(width) || 800,
          height: Math.floor(height) || 450,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center bg-gray-100 overflow-hidden"
    >
      {!isLoaded && <VideoLoadingState />}

      {/* Use dynamic video URL */}
      {isLoaded && (
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="fb-video"
            data-href={videoUrl}
            data-width={dimensions.width.toString()}
            data-height={dimensions.height.toString()}
            data-show-text="false"
            data-lazy="true"
          />
        </div>
      )}
    </div>
  );
}
