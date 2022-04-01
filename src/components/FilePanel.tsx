import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { saveAs } from 'file-saver';

import { useCanvas } from 'contexts/canvas';
import { getCanvasImage } from 'utils/canvas';
import { show } from 'modules/modals/slice';
import Panel from 'components/Panel';

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

  const openProjectsModal = () => {
    dispatch(show('PROJECTS_MODAL'));
  };

  return (
    <Panel title="File">
      <div className="field-row">
        <button className="button" onClick={exportToFile}>
          Export
        </button>
        <button
          className="button"
          onClick={openProjectSaveModal}
        >
          Save
        </button>
        <button
          className="button"
          onClick={openProjectsModal}
        >
          Open
        </button>
      </div>
    </Panel>
  );
};

export default FilePanel;
