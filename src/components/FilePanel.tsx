import { FC } from 'react';
import { saveAs } from 'file-saver';

import { useCanvas } from 'contexts/canvas';
import { getCanvasImage } from 'utils/canvas';

const FilePanel: FC = () => {
  const canvasRef = useCanvas();

  const exportToFile = async () => {
    const file = await getCanvasImage(canvasRef.current);
    
    if (file) {
      saveAs(file, 'drawing.png');
    }
  };

  return (
    <div className="window file-panel">
      <div className="title-bar">
        <div className="title-bar-text">File</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button className="save-button" onClick={exportToFile}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilePanel;
