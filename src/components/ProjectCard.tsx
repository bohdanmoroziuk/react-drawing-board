import { FC } from 'react';
import { Project } from 'types';

export interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, onClick }) => (
  <div
    className="project-card"
    onClick={onClick}
  >
    <img src={project.image} alt="thumbnail" />
    <div>{project.name}</div>
  </div>
);

export default ProjectCard;
