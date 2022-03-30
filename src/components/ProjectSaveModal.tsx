import { FC, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { saveProject } from 'modules/strokes/saveProject';
import { hide } from 'modules/modals/slice';
import { useCanvas } from 'contexts/canvas';
import { getCanvasImage } from 'utils/canvas';
import { getBase64Thumbnail } from 'utils/scaler';

const ProjectSaveModal: FC = () => {
  const dispatch = useDispatch();

  const canvasRef = useCanvas();

  const [projectName, setProjectName] = useState('');

  const handleProjectNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };

  const handleProjectSave = async () => {
    const file = await getCanvasImage(canvasRef.current);

    if (!file) return;

    const thumbnail = await getBase64Thumbnail({ file, scale: 0.1 });

    dispatch(saveProject(projectName, thumbnail));
    setProjectName('');
    dispatch(hide());
  };

  const handleCancel = () => {
    setProjectName('');
    dispatch(hide());
  };

  return (
    <div className="window modal-panel">
      <div className="title-bar">
        <div className="title-bar-text">Save</div>
      </div>
      <div className="window-body">
        <div className="field-row-stacked">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={handleProjectNameChange}
          />
        </div>
        <div className="field-row">
          <button onClick={handleProjectSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSaveModal;
