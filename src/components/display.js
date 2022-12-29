import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';
// import ChooseOption from './mainPage';

const Display = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  // create new heading
  const addHeading = (heading) => {
    const newHeading = {
      id: Math.random(),
      heading,
    };

    // add heading to the list
    setList([...list, newHeading]);

    // clear input
    setInput('');
  };

  const handler = (e) => {
    if (e.key === 'Enter') {
      addHeading();
    }
  };
  return (
    <div className="wrapper">
      <ul className="text-wrap">
        {list.map((heading) => (
          <li key={heading.id}>
            <h1>{heading.heading}</h1>
            <BsList />
          </li>
        ))}

      </ul>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => handler(e)}
          className="type-field"
          placeholder="Heading 1"
        />
      </div>
    </div>
  );
};
export default Display;
