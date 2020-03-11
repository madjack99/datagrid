import React, { createContext, forwardRef } from 'react';
import { FixedSizeGrid } from 'react-window';
import { connect } from 'react-redux';

import Cell from '../cell';
import StickyCell from '../sticky-cell';

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

class StickyGrid extends React.Component {
  constructor(props) {
    super(props);
    this.fixedGrid = React.createRef(null);
  }
  render() {
    const { children, stickyIndices, columnCount, ...rest } = this.props;
    return (
      <StickyGridContext.Provider
        value={{ ItemRenderer: children, stickyIndices, columnCount }}
      >
        <FixedSizeGrid
          ref={this.fixedGrid}
          itemData={{ ItemRenderer: children, stickyIndices }}
          columnCount={columnCount}
          {...rest}
        >
          {ItemWrapper}
        </FixedSizeGrid>
      </StickyGridContext.Provider>
    );
  }
}

const Grid = ({ personList }) => {
  const staticGrid = React.useRef(null);
  const onScroll = React.useCallback(
    ({ scrollTop, scrollUpdateWasRequested }) => {
      if (!scrollUpdateWasRequested) {
        staticGrid.current.fixedGrid.current.scrollTo({
          scrollLeft: 0,
          scrollTop,
        });
      }
    },
    []
  );
  return (
    <div className='two-grids-wrapper'>
      <StickyGrid
        ref={staticGrid}
        style={{ overflowY: 'hidden' }}
        className='fixed-column'
        columnCount={1}
        columnWidth={100}
        rowCount={personList.length}
        rowHeight={50}
        height={250}
        width={150}
        stickyIndices={[0]}
        innerElementType={innerElementType}
      >
        {Cell}
      </StickyGrid>
      <StickyGrid
        onScroll={onScroll}
        columnCount={8}
        columnWidth={150}
        rowCount={personList.length}
        rowHeight={50}
        height={250}
        width={1250}
        stickyIndices={[0]}
        innerElementType={innerElementType}
      >
        {Cell}
      </StickyGrid>
    </div>
  );
};

const mapStateToProps = ({ personList }) => ({
  personList,
});

export default connect(mapStateToProps)(Grid);
