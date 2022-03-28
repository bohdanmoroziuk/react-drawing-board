import { FC, useRef } from 'react';

const App: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startDrawing = () => {};

  const endDrawing = () => {};

  const draw = () => {};

  return (
    <div className="app">
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
};

export default App;
