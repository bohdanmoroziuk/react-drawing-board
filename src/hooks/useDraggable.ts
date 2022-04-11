/* eslint-disable react-hooks/exhaustive-deps */

import { useRef, useState, useEffect } from 'react';

export interface Position {
  x: number;
  y: number;
}

export default function useDragging<T extends HTMLElement>(initialPosition: Position = { x: 0, y: 0 }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<Position>(initialPosition);
  
  const ref = useRef<T>(null);

  const handleMouseMove = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    
    if (!isDragging) return;
    if (!ref.current) return;

    setPosition({
      x: event.x - ref.current.offsetWidth / 2,
      y: event.y - ref.current.offsetHeight / 2,
    });
  }

  function handleMouseUp(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    setIsDragging(false);
  }

  function handleMouseDown(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(true);

    if (!ref.current) return;

    setPosition({
      x: event.x - ref.current.offsetWidth / 2,
      y: event.y - ref.current.offsetHeight / 2,
    });

  }

  useEffect(() => {
    ref.current?.addEventListener("mousedown", handleMouseDown);

    return () => {
      ref.current?.removeEventListener("mousedown", handleMouseDown);
    };
  }, [ref.current]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    }
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging]);

  return [ref, position, isDragging] as const;
}
