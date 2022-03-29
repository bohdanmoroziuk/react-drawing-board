import { useContext, createContext, RefObject, FC, useRef } from 'react';

export type CanvasValue = RefObject<HTMLCanvasElement>;

export const CanvasContext = createContext<CanvasValue>({} as CanvasValue);

export const useCanvas = () => {
  const canvas = useContext(CanvasContext);

  if (canvas) return canvas;

  throw new Error('useCanvas must be called within CanvasProvider');
};

export const CanvasProvider: FC = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <CanvasContext.Provider value={canvasRef}>
      {children}
    </CanvasContext.Provider>
  );
};