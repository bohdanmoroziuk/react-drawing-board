import { FC } from 'react';

export interface ModalPanelProps {
  title: string;
  onHide: () => void;
}

const ModalPanel: FC<ModalPanelProps> = ({ title, children, onHide }) => (
  <div className="window modal-panel">
    <div className="title-bar">
      <div className="title-bar-text">{title}</div>
      <div className="title-bar-controls">
        <button aria-label="Close" onClick={onHide} />
      </div>
    </div>
    <div className="window-body">
      {children}
    </div>
  </div>
);

export default ModalPanel;
