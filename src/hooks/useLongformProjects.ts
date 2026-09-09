import { useState, useEffect } from 'react';
import { initialLongformProjects } from '../data/longformProjects';
import type { LongformProject } from '../data/longformProjects';

const LONGFORM_PLAYLIST_ID = 'PLLulL7ti4S2g';

export function useLongformProjects() {
  const [projects, setProjects] = useState<LongformProject[]>(initialLongformProjects);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    if (!apiKey) {
      return;
    }

    async function fetchPlaylist() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${LONGFORM_PLAYLIST_ID}&key=${apiKey}`
        );
        if (!res.ok) throw new Error('Failed to fetch YouTube longform playlist');
        const data = await res.json();

        if (data.items && data.items.length > 0) {
          const dynamicProjects: LongformProject[] = data.items
            .filter((item: any) => item.snippet?.resourceId?.videoId && item.snippet.title !== 'Private video')
            .map((item: any) => {
              const snippet = item.snippet;
              const videoId = snippet.resourceId.videoId;

              const existing = initialLongformProjects.find(r => r.videoId === videoId);

              return {
                videoId,
                title: existing?.title || snippet.title?.toUpperCase() || '4K IMAGEFILM',
                desc: existing?.desc || snippet.description?.slice(0, 160) || 'Cinematische 4K-Produktion für maximale Markenwirkung.',
                kpi: existing?.kpi || '+250% mehr Reichweite & Anfragen',
                company: existing?.company || snippet.videoOwnerChannelTitle || 'Markenlos Kunde',
                duration: existing?.duration || '03:30 Min',
                thumb: snippet.thumbnails?.maxres?.url || snippet.thumbnails?.high?.url || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
              };
            });

          if (dynamicProjects.length > 0) {
            setProjects(dynamicProjects);
          }
        }
      } catch (err) {
        console.warn('YouTube longform playlist fetch fallback:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPlaylist();
  }, []);

  return { projects, isLoading };
}
