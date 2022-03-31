import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { undo, redo } from 'modules/historyIndex/slice';
import { strokesLengthSelector } from 'modules/strokes/selectors';
import Panel from 'components/Panel';

const EditPanel: FC = () => {
  const dispatch = useDispatch();

  const undoLimit = useSelector(strokesLengthSelector);

  const handleUndo = () => {
    dispatch(undo(undoLimit));
  };

  const handleRedo = () => {
    dispatch(redo());
  };

  return (
    <Panel title="Edit">
      <div className="field-row">
        <button
          className="button undo"
          onClick={handleUndo}
        >
          Undo
        </button>
        <button
          className="button redo"
          onClick={handleRedo}
        >
          Redo
        </button>
      </div>
    </Panel>
  );
};

export default EditPanel;
