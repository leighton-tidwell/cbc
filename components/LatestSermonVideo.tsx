'use client';

import { useEffect, useState, useRef } from 'react';

// interface FacebookVideo {
//   id: string;
//   description?: string;
//   title?: string;
//   permalink_url: string;
//   created_time: string;
// }

export default function LatestSermonVideo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 800, height: 450 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TODO: Uncomment when valid access token is available
    // Fetch latest video from Facebook Graph API
    /*
    const fetchLatestVideo = async () => {
      try {
        // Using the page ID from the access token
        const pageId = '739260818526228';
        const accessToken = 'YOUR_ACCESS_TOKEN_HERE';
        
        // Fetch videos from the page
        const response = await fetch(
          `https://graph.facebook.com/v18.0/${pageId}/videos?access_token=${accessToken}&fields=id,description,title,permalink_url,created_time&limit=1`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          setLatestVideo(data.data[0]);
        }
      } catch (err) {
        console.error('Error fetching Facebook video:', err);
        setError('Failed to load video');
      }
    };

    fetchLatestVideo();
    */

    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      window.fbAsyncInit = function () {
        window.FB.init({
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
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="mt-4 text-text-light">Loading video...</p>
          </div>
        </div>
      )}

      {/* Fallback to specific video for now */}
      {isLoaded && (
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="fb-video"
            data-href="https://www.facebook.com/cbcmerkel/videos/1722709861670680"
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
