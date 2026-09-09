import { useState, useEffect } from 'react';
import { initialShortformReels } from '../data/shortformProjects';
import type { ShortformReel } from '../data/shortformProjects';

const PLAYLIST_ID = 'PLRxGkFO4_usI';

export function useShortformReels() {
  const [reels, setReels] = useState<ShortformReel[]>(initialShortformReels);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    if (!apiKey) {
      // Use fallback built-in list of 17 curated videos
      return;
    }

    async function fetchPlaylist() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${apiKey}`
        );
        if (!res.ok) throw new Error('Failed to fetch YouTube playlist');
        const data = await res.json();
        
        if (data.items && data.items.length > 0) {
          const dynamicReels: ShortformReel[] = data.items
            .filter((item: any) => item.snippet?.resourceId?.videoId && item.snippet.title !== 'Private video')
            .map((item: any) => {
              const snippet = item.snippet;
              const videoId = snippet.resourceId.videoId;
              
              // Check if we have pre-configured custom descriptions/badges
              const existing = initialShortformReels.find(r => r.videoId === videoId);
              
              return {
                videoId,
                title: existing?.title || snippet.title?.toUpperCase() || 'MARKENLOS REEL',
                desc: existing?.desc || snippet.description?.slice(0, 120) || 'Dynamische Kurzvideo-Produktion im 9:16 Format.',
                kpi: existing?.kpi || '+220% Reichweite & Engagement',
                company: existing?.company || snippet.videoOwnerChannelTitle || 'Markenlos Client',
                badge: existing?.badge || 'Shortform',
                thumb: snippet.thumbnails?.maxres?.url || snippet.thumbnails?.high?.url || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
              };
            });
          
          if (dynamicReels.length > 0) {
            setReels(dynamicReels);
          }
        }
      } catch (err) {
        console.warn('YouTube playlist dynamic fetch fallback to static list:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPlaylist();
  }, []);

  return { reels, isLoading };
}
