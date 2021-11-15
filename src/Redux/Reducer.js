export const DISPLAY = '/display';

export const fetchToDisplay = () => async (dispach) => {
  const todaydate = new Date().toISOString().slice(0, 10);
  const data = await fetch(
    `https://api.covid19tracking.narrativa.com/api/${todaydate}`,
  );
  const temp = await data.json();

  dispach({ type: DISPLAY, payload: temp });
};

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (DISPLAY):
      return [...state, action.payload.dates];

    default:
      return state;
  }
};

export default reducer;
