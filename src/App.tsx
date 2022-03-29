import { FC, useRef, useMemo, useEffect, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { beginStroke, updateStroke, endStroke } from 'modules/currentStroke/actions';
import { currentStrokeSelector } from 'modules/currentStroke/selectors'

import { historyIndexSelector } from 'modules/historyIndex/selectors';

import { strokesSelector } from 'modules/strokes/selectors';

import { drawStroke, clearCanvas } from 'utils/canvas';

import EditPanel from 'components/EditPanel';
import ColorPanel from 'components/ColorPanel';

const App: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const currentStroke = useSelector(currentStrokeSelector);
  
  const historyIndex = useSelector(historyIndexSelector);

  const strokes = useSelector(strokesSelector);

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
      dispatch(endStroke(currentStroke, historyIndex));
    }
  };

  const draw = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing) {
      dispatch(updateStroke(nativeEvent.offsetX, nativeEvent.offsetY));
    }
  };

  useEffect(() => {
    const { context } = getCanvasAndContext();

    if (!context)  return;

    requestAnimationFrame(() => {
      drawStroke(context, currentStroke.points, currentStroke.color);
    });
  }, [currentStroke]);

  useEffect(() => {
    const { canvas, context } = getCanvasAndContext();
    
    if (!context || !canvas) return;

    requestAnimationFrame(() => {
      clearCanvas(canvas);

      strokes
        .slice(0, strokes.length - historyIndex)
        .forEach((stroke) => {
          drawStroke(context, stroke.points, stroke.color)
        });
    });
  }, [historyIndex, strokes]);

  return (
    <div className="app">
      <EditPanel />
      <ColorPanel />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        width="600"
        height="400"
      />
    </div>
  );
};

export default App;
