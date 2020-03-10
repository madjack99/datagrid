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
