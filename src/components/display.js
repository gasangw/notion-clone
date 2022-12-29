import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';
// import ChooseOption from './mainPage';

const Display = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTaskList([...taskList, newTask]);
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handler = (e) => {
    if (e.key === 'Enter') {
      addTask();
      e.target.value = '';
    }
  };
  return (
    <div className="wrapper">
      <div>
        <input
          type="text"
          onChange={handleChange}
          onKeyPress={(e) => handler(e)}
          className="type-field"
          placeholder="Heading 1"
        />
        <div className="text-wrap">
          {taskList.map((w) => (
            <div key={w.id}>
               {w}
               <BsList />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Display;
