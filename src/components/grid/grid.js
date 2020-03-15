import React, { createContext, forwardRef, useEffect, useState } from 'react';
import { FixedSizeGrid } from 'react-window';
import { connect } from 'react-redux';

import Cell from '../cell';
import StickyCell from '../sticky-cell';
import ErrorMessage from '../error-message';

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
  const ONE_ROW_VALUES = personList.length
    ? Object.keys(personList[0]).length
    : 8;
  const staticGrid = React.useRef(null);

  const latestPersonList = React.useRef(null);
  latestPersonList.current = personList;

  useEffect(() => {
    return () => {
      localStorage.setItem(
        'savedPersonList',
        JSON.stringify(latestPersonList.current)
      );
    };
  });

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

  const [leftValue, setLeftValue] = useState(0);

  const handleFixedColumnScroll = React.useCallback(e => {
    setLeftValue(window.pageXOffset);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleFixedColumnScroll);
  });

  if (!personList.length) return <ErrorMessage />;

  return (
    <div className='two-grids-wrapper'>
      <StickyGrid
        ref={staticGrid}
        style={{ overflowY: 'hidden', left: leftValue }}
        className='fixed-column'
        columnCount={1}
        columnWidth={150}
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
        columnCount={ONE_ROW_VALUES}
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
