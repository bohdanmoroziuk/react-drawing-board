import { FC } from 'react';

export interface PanelProps {
  title: string;
};

const Panel: FC<PanelProps> = ({ title, children }) => (
  <div className="window panel">
    <div className="title-bar">
      <div className="title-bar-text">
        {title}
      </div>
    </div>
    <div className="window-body">
      {children}
    </div>
  </div>
);

export default Panel;
