import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { currentStrokeWidthSelector } from 'modules/currentStroke/selectors';
import { setStrokeWidth } from 'modules/currentStroke/slice';
import { resetStrokes } from 'modules/strokes/slice';
import Panel from 'components/Panel';

const BoardPanel: FC = () => {
  const dispatch = useDispatch();

  const strokeWidth = useSelector(currentStrokeWidthSelector);

  const handleStrokeWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(event.target.value, 10);

    dispatch(setStrokeWidth(value));
  };

  const handleBoardClear = () => {
    dispatch(resetStrokes());
  };

  return (
    <Panel
      title="Board"
      initialPosition={{ x: 820, y: 5 }}
    >
      <div className="field-row">
        <button className="button" onClick={handleBoardClear}>
          Clear
        </button>
        <div className="field-row" style={{ maxWidth: '250px' }}>
          <label>Line width:</label>
          <label>Thin</label>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={strokeWidth}
            onChange={handleStrokeWidthChange}
          />
          <label>Wide</label>
        </div>
      </div>
    </Panel>
  );
};

export default BoardPanel;
