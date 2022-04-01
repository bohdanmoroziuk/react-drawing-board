import { FC, MouseEvent } from 'react';
import { Project } from 'types';

export interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  onDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, onClick, onDelete }) => (
  <div
    className="project-card"
    onClick={onClick}
  >
    <img className="project-card-thumbnail" src={project.image} alt="thumbnail" />
    <div className="project-card-name">{project.name}</div>
    <button className="project-card-button button" onClick={onDelete}>Delete</button>
  </div>
);

export default ProjectCard;
