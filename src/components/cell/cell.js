import React from 'react';

function Cell({ columnIndex, rowIndex, style }) {
  return (
    <div style={style}>
      Item {rowIndex},{columnIndex}
    </div>
  );
}

export default Cell;
