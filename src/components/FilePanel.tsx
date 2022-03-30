import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { saveAs } from 'file-saver';

import { useCanvas } from 'contexts/canvas';
import { getCanvasImage } from 'utils/canvas';

import { show } from 'modules/modals/slice';

const FilePanel: FC = () => {
  const dispatch = useDispatch();

  const canvasRef = useCanvas();

  const exportToFile = async () => {
    const file = await getCanvasImage(canvasRef.current);
    
    if (file) {
      saveAs(file, 'drawing.png');
    }
  };

  const openProjectSaveModal = () => {
    dispatch(show('PROJECT_SAVE_MODAL'));
  };

  return (
    <div className="window file-panel">
      <div className="title-bar">
        <div className="title-bar-text">File</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button className="save-button" onClick={exportToFile}>
            Export
          </button>
          <button
            className="save-button"
            onClick={openProjectSaveModal}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilePanel;
