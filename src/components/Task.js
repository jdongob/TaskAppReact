import React from "react";
import '../stylesheets/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";  //React Icons : npm install react-icons --save


function Task({ id, text, completed, completeTask, deleteTask }) {
  return (
    <div className={completed ? 'task-container completed' : 'task-container' }>

      <div className='task-text'
           onClick={() => completeTask(id)}>
        {text}
      </div>

      <div className='task-container-icons'
           onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );
}

export default Task;