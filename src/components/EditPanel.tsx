import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { undo, redo } from 'modules/historyIndex/slice';
import { strokesLengthSelector } from 'modules/strokes/selectors';

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
    <div className="window edit-panel">
      <div className="title-bar">
        <div className="title-bar-text">Edit</div>
      </div>
      <div className="window-body">
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
      </div>
    </div>
  );
};

export default EditPanel;
