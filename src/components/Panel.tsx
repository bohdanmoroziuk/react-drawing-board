import { FC } from 'react';

import useDragging, { Position } from 'hooks/useDraggable';

export interface PanelProps {
  title: string;
  initialPosition?: Position;
};

const Panel: FC<PanelProps> = ({ title,initialPosition,  children }) => {
  const [ref, position, isDragging] = useDragging<HTMLDivElement>(initialPosition);

  return (
    <div
      className="window panel"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
      }}
    >
      <div
        className="title-bar"
        ref={ref}
        style={{
          cursor: isDragging ? 'move' : 'pointer',
        }}
      >
        <div className="title-bar-text">
          {title}
        </div>
      </div>
      <div className="window-body">
        {children}
      </div>
    </div>
  );
};

export default Panel;
