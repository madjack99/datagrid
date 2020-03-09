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

const filterByText = (state, textInput) => {
  const { personList } = state;
  return personList.filter(item => {
    const itemValues = Object.values(item);
    const stringValues = itemValues.filter(value => typeof value === 'string');
    for (let personValue of stringValues) {
      const lowerPersonValue = personValue.toLowerCase();
      if (lowerPersonValue.includes(textInput)) {
        return item;
      }
    }
    return false;
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
    case 'FILTER_BY_TEXT':
      return {
        ...state,
        personList: [...filterByText(state, action.payload)],
      };
    default:
      return state;
  }
};

export default reducer;
