import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks ] = useState([]);
  
  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  }  ;

  const removeTask = (index) => {
    const newTask = [...tasks]
    newTask.splice(index,1)
    setTasks(newTask)

  };  
  
  
  return (
    <>
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-tasks'>
                <AddTask addTask={addTask}/>
            </div>
            <div className='tasks'>
                {tasks.map((task,index) => (
                  <ListTask task={task} removeTask={removeTask}
                  index={index} key={index} />
                )
                )}
            </div>
        </div>
    </>
  )
}

export default Todo