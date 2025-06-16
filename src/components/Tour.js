import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, onRemove }) => {
  // ✅ This hook MUST be at the top level — and it is here
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={{ width: '500px', margin: 'auto' }}>
      <img src={image} alt={name} />

      <div>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <p>
          {showMore ? info : `${info.slice(0, 200)}...`}
          <button onClick={() => setShowMore(!showMore)} style={{ marginLeft: '10px' }}>
            {showMore ? 'See Less' : 'Show More'}
          </button>
        </p>
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>
    </div>
  );
};

export default Tour;
