import React from 'react';

const ChooseOption = () => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('hi');
    }
  };
  return (
    <div className="container">
      <div />
      <input type="search" className="input--section" placeholder="Type / for blocks, @ to link docs or people" onKeyPress={handleKeyPress} />
    </div>
  );
};
export default ChooseOption;
