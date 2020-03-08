import getFakeData from '../services/data';

const initialState = {
  personList: getFakeData(),
};

const sortByCategory = (state, category) => {
  return state.personList.sort((a, b) => {
    if (a[category] < b[category]) return -1;
    else if (a[category] > b[category]) return 1;
    else return 0;
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INITIAL_LIST':
      return {
        personList: initialState.personList,
      };
    case 'SORT_BY':
      return {
        personList: [...sortByCategory(state, action.payload)],
      };
    default:
      return state;
  }
};

export default reducer;
