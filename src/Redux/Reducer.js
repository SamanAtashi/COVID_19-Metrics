export const DISPLAY = '/display';

export const fetchToDisplay = () => async (dispach) => {
  const data = await fetch(
    'https://corona.lmao.ninja/v2/continents?yesterday=true&sort',
  );
  const temp = await data.json();

  return dispach({ type: DISPLAY, payload: temp });
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default reducer;
