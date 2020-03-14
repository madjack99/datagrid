export const sortBy = category => {
  return {
    type: 'SORT_BY',
    payload: category,
  };
};

export const filterByText = textInput => {
  return {
    type: 'FILTER_BY_TEXT',
    payload: textInput,
  };
};

export const filterByStatus = status => {
  return {
    type: 'FILTER_BY_STATUS',
    payload: status,
  };
};

export const filterByState = selectedStates => {
  return {
    type: 'FILTER_BY_STATE',
    payload: selectedStates,
  };
};

export const sortByMultipleFields = sortInstructions => {
  return {
    type: 'SORT_BY_MULTIPLE_FIELDS',
    payload: sortInstructions,
  };
};

export const checkRow = rowId => {
  return {
    type: 'CHECK_ROW',
    payload: rowId,
  };
};

export const deleteRow = () => {
  return {
    type: 'DELETE_ROW',
  };
};

export const hideColumn = hiddenColumns => {
  return {
    type: 'HIDE_COLUMN',
    payload: hiddenColumns,
  };
};

export const filterByTextAndState = (text, state) => {
  return {
    type: 'FILTER_BY_TEXT_AND_STATE',
    payload: [text, state],
  };
};

export const loadSavedPersonList = savedPersonList => {
  return {
    type: 'LOAD_SAVED_PERSON_LIST',
    payload: savedPersonList,
  };
};

export const getInitialList = () => {
  return {
    type: 'GET_INITIAL_LIST',
  };
};
