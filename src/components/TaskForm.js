import React, { useState }from "react";
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';  // Universal Unique Identifier = npm install uuid


function TaskForm(props) {

  /* Global variable: Hooks */  
  const[input, setInput] = useState(''); 

  const manageChange = e => {
    setInput(e.target.value); 
  };
  
  const manageSend = e => {
    e.preventDefault();    

    /* Define an Object */
    const taskNew = {
      id: uuidv4(),
      text: input,
      completed: false
    };
        
    props.onSubmit(taskNew); 
    
};


  return(
    <form className='task-form'
          onSubmit={manageSend}>
      <input 
        className='task-input'
        type='text'
        placeholder='Write a task'
        name='text'
        
        onChange={manageChange}
      />

      <button className='task-button'>
        Add task
      </button>
    </form>
  );
}

export default TaskForm;