import { FC, useRef, useMemo, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { beginStroke, endStroke, updateStroke } from 'actions';
import { currentStrokeSelector } from 'selectors';

const App: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const currentStroke = useSelector(currentStrokeSelector);

  const isDrawing = useMemo(() => !!currentStroke.points.length, [currentStroke]);

  const dispatch = useDispatch();

  const startDrawing = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    dispatch(beginStroke(nativeEvent.offsetX, nativeEvent.offsetY));
  };

  const endDrawing = () => {
    if (isDrawing) {
      dispatch(endStroke());
    }
  };

  const draw = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing) {
      dispatch(updateStroke(nativeEvent.offsetX, nativeEvent.offsetY));
    }

  };

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
