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

const filterByStatus = status => {
  const { personList } = initialState;
  let result;
  if (status === 'married') {
    result = personList.filter(person => person.married === 'Yes');
  } else if (status === 'single') {
    result = personList.filter(person => person.married === 'No');
  } else {
    result = personList;
  }
  return result;
};

const filterByState = selectedStates => {
  const { personList } = initialState;
  const result = personList.filter(({ state }) =>
    selectedStates.includes(state)
  );
  console.log(result, 'result');
  if (result.length === 0 || selectedStates.length === 0) return personList;
  return result;
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
    case 'FILTER_BY_STATUS':
      return {
        ...state,
        personList: [...filterByStatus(action.payload)],
      };
    case 'FILTER_BY_STATE':
      return {
        ...state,
        personList: [...filterByState(action.payload)],
      };
    default:
      return state;
  }
};

export default reducer;
