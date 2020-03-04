import React from 'react';
import { FixedSizeGrid } from 'react-window';

import Cell from '../cell';

function Grid() {
  return (
    <FixedSizeGrid
      columnCount={7}
      columnWidth={100}
      height={150}
      rowCount={10}
      rowHeight={35}
      width={300}
    >
      {Cell}
    </FixedSizeGrid>
  );
}

export default Grid;
