import { FC } from 'react';
import { useSelector } from 'react-redux';

import { modalNameSelector } from 'modules/modals/selectors';
import ProjectSaveModal from 'components/ProjectSaveModal';

const ModalLayer: FC = () => {
  const modalName = useSelector(modalNameSelector);

  switch (modalName) {
    case 'PROJECT_SAVE_MODAL':
      return <ProjectSaveModal />
    default: 
      return null;
  }
};

export default ModalLayer;
