export interface FacebookVideo {
  id: string;
  description?: string;
  title?: string;
  permalink_url: string;
  created_time: string;
  source?: string;
  picture?: string;
}

interface FacebookApiResponse {
  data: FacebookVideo[];
}

export async function getFacebookVideos(
  limit: number = 12
): Promise<FacebookVideo[]> {
  const pageId = '208971289754374'; // Calvary Baptist Church page ID
  const accessToken = process.env.FB_LONG_LIVE_TOKEN;

  if (!accessToken) {
    console.error('Facebook access token not configured');
    return [];
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pageId}/videos?access_token=${accessToken}&fields=id,description,title,permalink_url,created_time,source,picture&limit=${limit}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Facebook API error:', error);
      return [];
    }

    const data: FacebookApiResponse = await response.json();

    if (!data.data || data.data.length === 0) {
      console.log('No videos found on Facebook page');
      return [];
    }

    // Convert relative permalinks to absolute URLs
    const videos = data.data.map((video) => {
      if (video.permalink_url && !video.permalink_url.startsWith('http')) {
        video.permalink_url = `https://www.facebook.com${video.permalink_url}`;
      }
      return video;
    });

    return videos;
  } catch (error) {
    console.error('Error fetching Facebook videos:', error);
    return [];
  }
}

export async function getLatestFacebookVideo(): Promise<FacebookVideo | null> {
  const pageId = '208971289754374'; // Calvary Baptist Church page ID
  const accessToken = process.env.FB_LONG_LIVE_TOKEN;

  if (!accessToken) {
    console.error('Facebook access token not configured');
    return null;
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pageId}/videos?access_token=${accessToken}&fields=id,description,title,permalink_url,created_time,source,picture&limit=1`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Facebook API error:', error);
      return null;
    }

    const data: FacebookApiResponse = await response.json();

    if (!data.data || data.data.length === 0) {
      console.log('No videos found on Facebook page');
      return null;
    }

    const video = data.data[0];
    // Convert relative permalink to absolute URL
    if (
      video &&
      video.permalink_url &&
      !video.permalink_url.startsWith('http')
    ) {
      video.permalink_url = `https://www.facebook.com${video.permalink_url}`;
    }
    return video;
  } catch (error) {
    console.error('Error fetching Facebook video:', error);
    return null;
  }
}

export function formatSermonDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function extractSermonTitle(video: FacebookVideo): string {
  // Try to extract title from description or use a default
  if (video.title) return video.title;

  if (video.description) {
    // Look for common patterns in sermon descriptions
    const lines = video.description.split('\n');
    if (lines.length > 0) {
      // Often the first line is the title
      return lines[0].trim();
    }
  }

  return "Walking in Faith: Trust God's Plan";
}
