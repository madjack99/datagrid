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
