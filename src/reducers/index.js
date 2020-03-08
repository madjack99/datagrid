import getFakeData from '../services/data';

const initialState = {
  personList: getFakeData(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INITIAL_LIST':
      return state;
    default:
      return state;
  }
};

export default reducer;
