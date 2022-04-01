import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hide } from 'modules/modals/slice';
import { loadProject } from 'modules/strokes/loadProject';
import { getProjectsList } from 'modules/projectsList/getProjectsList';
import { projectsListSelector } from 'modules/projectsList/selectors';
import useOnMount from 'hooks/useOnMount';

const ProjectsModal: FC = () => {
  const dispatch = useDispatch();

  const projectsList = useSelector(projectsListSelector);

  const hideModal = () => {
    dispatch(hide());
  };

  const handleProjectLoad = (id: string) => () => {
    dispatch(loadProject(id));
    hideModal();
  };

  useOnMount(() => {
    dispatch(getProjectsList());
  });

  return (
    <div className="window modal-panel">
      <div className="title-bar">
        <div className="title-bar-text">Counter</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={hideModal} />
        </div>
      </div>
      <div className="window-body">
        <div className="projects-container">
          {projectsList.projects.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={handleProjectLoad(project.id)}
            >
              <img src={project.image} alt="thumbnail" />
              <div>{project.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
