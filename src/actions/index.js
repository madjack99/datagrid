export const sortBy = category => {
  console.log('dispatch sorting', typeof category);
  return {
    type: 'SORT_BY',
    payload: category,
  };
};
