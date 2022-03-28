import { FC, useRef } from 'react';

const App: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="app">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default App;
