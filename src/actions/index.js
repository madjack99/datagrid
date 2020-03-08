export const sortBy = category => {
  console.log('dispatch sorting', category);
  return {
    type: 'SORT_BY',
    payload: category,
  };
};
