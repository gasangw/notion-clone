import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import getUID from '../helpers/unique-id';
import InputProcessor from './InputProcessor';

const Main = () => {
  const [blocksList, setBlocks] = useState([]);

  const updateblocks = (newBlock) => {
    setBlocks([...blocksList, newBlock]);
  };

  return (
    <>
      <div className="text-wrap">
        {blocksList.map(({ isHeading, style, data }) => (
          <div key={getUID()} className="d-flex align-items-center content" style={style}>
            {isHeading && <span className="bars"><BsList /></span>}
            {data}
          </div>
        ))}
      </div>
      <InputProcessor addBlock={updateblocks} />
    </>
  );
};

export default Main;
