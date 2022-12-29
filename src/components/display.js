import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';
// import ChooseOption from './mainPage';

const Display = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [data, setData] = useState('');
  const [placeholder, setPlaceHolder] = useState('Type / for blocks, @ to link docs or people');

  const propertyProcessing = (value) => {
    if (!value.startsWith('/')) {
      setNewTask(value);
    } else if (value.startsWith('/+')) {
      // go back to normal text
      setPlaceHolder('Type / for blocks, @ to link docs or people');
      setData('');
    } else if (value.startsWith('/1')) {
      // go to heading format.
      setPlaceHolder('Heading 1');
      setData('');
    }
  };
  const addTask = () => {
    setTaskList([...taskList, newTask]);
    setData('');
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setData(value);
    propertyProcessing(value);
  };

  const handler = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };
  return (
    <div className="wrapper">
      <div>
        <div className="text-wrap">
          {taskList.map((w) => (
            <div key={w.id} className="d-flex">
              <span className="bars"><BsList /></span>
              <h1>{w}</h1>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={data}
          onChange={handleChange}
          onKeyDown={(e) => handler(e)}
          className="type-field"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
export default Display;
