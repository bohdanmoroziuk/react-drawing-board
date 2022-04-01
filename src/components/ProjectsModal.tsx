import { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hide } from 'modules/modals/slice';
import { loadProject } from 'modules/strokes/loadProject';
import { loadProjectsList } from 'modules/projectsList/loadProjectsList';
import { deleteProject } from 'modules/projectsList/deleteProject';
import { projectsSelector } from 'modules/projectsList/selectors';
import useOnMount from 'hooks/useOnMount';

import ModalPanel from 'components/ModalPanel';
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

  const handleProjectDelete = (id: string) => (event: MouseEvent<HTMLButtonElement>) =>  {
    event.stopPropagation();

    dispatch(deleteProject(id));
  };

  useOnMount(() => {
    dispatch(loadProjectsList());
  });

  return (
    <ModalPanel title="Counter" onHide={hideModal}>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleProjectLoad(project.id)}
            onDelete={handleProjectDelete(project.id)}
          />
        ))}
      </div>
    </ModalPanel>
  );
};

export default ProjectsModal;
