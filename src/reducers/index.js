import getFakeData from '../services/data';

const initialState = {
  personList: getFakeData(),
  previouslySortedBy: null,
};

const sortByCategory = (state, category) => {
  if (state.previouslySortedBy === category) {
    return state.personList.reverse();
  }

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
        personList: [...initialState.personList],
        previouslySortedBy: null,
      };
    case 'SORT_BY':
      return {
        personList: [...sortByCategory(state, action.payload)],
        previouslySortedBy: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
