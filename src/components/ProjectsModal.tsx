import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hide } from 'modules/modals/slice';
import { loadProject } from 'modules/strokes/loadProject';
import { loadProjectsList } from 'modules/projectsList/loadProjectsList';
import { projectsSelector } from 'modules/projectsList/selectors';
import useOnMount from 'hooks/useOnMount';

import ProjectCard from 'components/ProjectCard';

const ProjectsModal: FC = () => {
  const dispatch = useDispatch();

  const projects = useSelector(projectsSelector);

  const hideModal = () => {
    dispatch(hide());
  };

  const handleProjectLoad = (id: string) => () => {
    dispatch(loadProject(id));
    hideModal();
  };

  useOnMount(() => {
    dispatch(loadProjectsList());
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
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleProjectLoad(project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
