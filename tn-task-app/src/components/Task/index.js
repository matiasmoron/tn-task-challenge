import React, { useState } from 'react';
import ModalPortal from '../Modal';
import './Task.scss';

function Task({ id, description, onComplete }) {
  const [showModal, setShowModal] = useState(false);

  const handleTaskSelection = () => {
    setShowModal(true);
  };

  const handleOnCompleteTask = () => {
    onComplete(id);
    setShowModal(false);
  };

  return (
    <>
      <div className="task__block" onClick={handleTaskSelection}>
        <span className="task-row__block">Task #{id}</span>
        <span className="task-row__block">{description}</span>
      </div>
      {showModal && (
        <ModalPortal
          onComplete={handleOnCompleteTask}
          onClose={() => setShowModal(false)}
        >
          <div className="content">
            <span>
              Task #{id} - {description}
            </span>
          </div>
        </ModalPortal>
      )}
    </>
  );
}

export default React.memo(
  Task,
  (prevProps, nextProps) => prevProps.id === nextProps.id,
);
