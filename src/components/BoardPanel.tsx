import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { resetStrokes } from 'modules/strokes/slice';
import Panel from 'components/Panel';

const BoardPanel: FC = () => {
  const dispatch = useDispatch();

  const handleBoardClear = () => {
    dispatch(resetStrokes());
  };

  return (
    <Panel title="Board">
      <div className="field-row">
        <button className="button" onClick={handleBoardClear}>
          Clear
        </button>
      </div>
    </Panel>
  );
};

export default BoardPanel;
