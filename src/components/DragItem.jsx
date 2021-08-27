import { useState } from 'react';

const DragItem = ({ index, showItem, setShowItem }) => {
  const [isHold, setIsHold] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDragStart = () => {
    setIsHold(true);
  };

  const handleDragEnd = () => {
    setIsHold(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsHovered(true);
  };

  const handleDragLeave = () => {
    setIsHovered(false);
  };

  const handleDrop = () => {
    setIsHovered(false);
    setIsHold(false);

    setShowItem(index);
  };

  return (
    <div
      className={`empty${isHovered ? ' hovered' : ''}`}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {showItem === index && (
        <div
          className={`fill${isHold ? ' hold' : ''}`}
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      )}
    </div>
  );
};

export default DragItem;
