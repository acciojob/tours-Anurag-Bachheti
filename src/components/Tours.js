import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, onRemove }) => {
  return (
    <div>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Tours;