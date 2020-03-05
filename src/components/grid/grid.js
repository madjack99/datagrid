import React, { createContext, forwardRef } from 'react';
import { FixedSizeGrid } from 'react-window';

import Cell, { StickyCell } from '../cell';

import './grid.css';

const StickyGridContext = createContext();
StickyGridContext.displayName = 'StickyGridContext';

const ItemWrapper = ({ data, columnIndex, rowIndex, style }) => {
  const { ItemRenderer, stickyIndices } = data;
  if (stickyIndices && stickyIndices.includes(rowIndex)) {
    return null;
  }
  return (
    <ItemRenderer columnIndex={columnIndex} rowIndex={rowIndex} style={style} />
  );
};

const innerElementType = forwardRef(({ children, ...rest }, ref) => (
  <StickyGridContext.Consumer>
    {({ stickyIndices, columnCount }) => (
      <div ref={ref} {...rest} className='sticky-container'>
        {Array(columnCount)
          .fill()
          .map((item, index) => (
            <StickyCell
              rowIndex={stickyIndices[0]}
              columnIndex={index}
              key={index}
              style={{ left: 150 * index }}
            />
          ))}

        {children}
      </div>
    )}
  </StickyGridContext.Consumer>
));

const StickyGrid = ({ children, stickyIndices, columnCount, ...rest }) => (
  <StickyGridContext.Provider
    value={{ ItemRenderer: children, stickyIndices, columnCount }}
  >
    <FixedSizeGrid
      itemData={{ ItemRenderer: children, stickyIndices }}
      columnCount={columnCount}
      {...rest}
    >
      {ItemWrapper}
    </FixedSizeGrid>
  </StickyGridContext.Provider>
);

const Grid = () => {
  return (
    <StickyGrid
      columnCount={8}
      columnWidth={150}
      rowCount={21}
      rowHeight={50}
      height={250}
      width={1217}
      stickyIndices={[0]}
      innerElementType={innerElementType}
    >
      {Cell}
    </StickyGrid>
  );
};

export default Grid;
