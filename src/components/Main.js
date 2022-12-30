import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import InputProcessor from './InputProcessor';

const Main = () => {
  const [blocksList, setBlocks] = useState([]);

  const updateblocks = (newBlock) => {
    setBlocks([...blocksList, newBlock]);
  };

  return (
    <>
      <div className="text-wrap">
        {blocksList.map((block) => (
          <div key={block} className="d-flex content">
            <span className="bars"><BsList /></span>
            {block}
          </div>
        ))}
      </div>
      <InputProcessor addBlock={updateblocks} />
    </>
  );
};

export default Main;
