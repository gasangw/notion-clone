import { useState } from 'react';
import InputProcessor from './InputProcessor';

const Main = () => {
  const [blocksList, setBlocks] = useState([]);

  const updateblocks = (newBlock) => {
    setBlocks([...blocksList, newBlock]);
  };

  return (
    <>
      <div>
        {blocksList.map((block) => <div key={block}>{block}</div>)}
      </div>
      <InputProcessor addBlock={updateblocks} />
    </>
  );
};

export default Main;
