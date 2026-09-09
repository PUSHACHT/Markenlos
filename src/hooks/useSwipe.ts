import { useRef } from 'react';
import type { TouchEvent } from 'react';

export interface SwipeHandlers {
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
}

export const useSwipe = (
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 40
): SwipeHandlers => {
  const startPos = useRef<{ x: number; y: number } | null>(null);
  const endPos = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      startPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      endPos.current = null;
    }
  };

  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      endPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const onTouchEnd = () => {
    if (!startPos.current || !endPos.current) return;
    const diffX = startPos.current.x - endPos.current.x;
    const diffY = startPos.current.y - endPos.current.y;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
    }
    startPos.current = null;
    endPos.current = null;
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
};
