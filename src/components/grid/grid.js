import React from 'react';
import { FixedSizeGrid } from 'react-window';

import Cell from '../cell';

function Grid() {
  return (
    <FixedSizeGrid
      columnCount={7}
      columnWidth={150}
      height={250}
      rowCount={1000}
      rowHeight={35}
      width={700}
    >
      {Cell}
    </FixedSizeGrid>
  );
}

export default Grid;
