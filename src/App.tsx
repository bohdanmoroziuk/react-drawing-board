import { FC, useRef, useMemo, useEffect, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { beginStroke, endStroke, updateStroke } from 'actions';
import { currentStrokeSelector } from 'selectors';
import { drawStroke } from 'utils/canvas';

const App: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const currentStroke = useSelector(currentStrokeSelector);

  const isDrawing = useMemo(() => !!currentStroke.points.length, [currentStroke]);

  const getCanvasAndContext = (canvas = canvasRef.current) => ({
    canvas,
    context: canvas?.getContext('2d'),
  });

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

  useEffect(() => {
    const { context } = getCanvasAndContext();

    if (!context) return;

    requestAnimationFrame(() => {
      drawStroke(context, currentStroke.points, currentStroke.color);
    });
  }, [currentStroke]);

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
