import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';

import { currentStrokeSelector } from 'selectors';

const App: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const currentStroke = useSelector(currentStrokeSelector);

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
