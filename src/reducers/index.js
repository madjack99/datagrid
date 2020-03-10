import getFakeData from '../services/data';
import orderBy from 'lodash/orderBy';

const initialState = {
  personList: getFakeData(),
  previouslySortedBy: null,
  multipleFieldsSort: [],
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
  if (result.length === 0 || selectedStates.length === 0) return personList;
  return result;
};

const sortByMultipleFields = (state, sortInstructions) => {
  const { personList, multipleFieldsSort } = state;

  const updatedSortInstructions = [...multipleFieldsSort, sortInstructions];

  const fields = updatedSortInstructions.map(item => item.field);
  const direction = updatedSortInstructions.map(item => item.direction);
  return orderBy(personList, fields, direction);
};

const updateMultipleFieldsSortInstructions = (state, sortInstructions) => {
  const { multipleFieldsSort } = state;
  return [...multipleFieldsSort, sortInstructions];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INITIAL_LIST':
      return {
        ...state,
        personList: [...initialState.personList],
        previouslySortedBy: null,
      };
    case 'SORT_BY':
      return {
        ...state,
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
    case 'SORT_BY_MULTIPLE_FIELDS':
      return {
        ...state,
        personList: [...sortByMultipleFields(state, action.payload)],
        multipleFieldsSort: updateMultipleFieldsSortInstructions(
          state,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
