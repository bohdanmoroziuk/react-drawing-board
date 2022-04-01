import { FC } from 'react';
import { useSelector } from 'react-redux';

import { modalNameSelector } from 'modules/modals/selectors';

import ProjectsModal from 'components/ProjectsModal';
import ProjectSaveModal from 'components/ProjectSaveModal';

const ModalLayer: FC = () => {
  const modalName = useSelector(modalNameSelector);

  switch (modalName) {
    case 'PROJECTS_MODAL':
      return <ProjectsModal />;
    case 'PROJECT_SAVE_MODAL':
      return <ProjectSaveModal />;
    default: 
      return null;
  }
};

export default ModalLayer;
