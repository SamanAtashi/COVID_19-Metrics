export const CONTINENTS = '/continents';
export const COUNTRIES = '/countries';

export const fetchContinents = () => async (dispach) => {
  const data = await fetch('https://disease.sh/v3/covid-19/continents');
  const temp = await data.json();

  return dispach({ type: CONTINENTS, payload: temp });
};

export const fetchCountries = () => async (dispach) => {
  const data = await fetch('https://disease.sh/v3/covid-19/countries');
  const temp = await data.json();

  return dispach({ type: COUNTRIES, payload: temp });
};

const initialState = { continents: [], countries: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTINENTS:
      return { ...state, continents: [...action.payload] };
    case COUNTRIES:
      return { ...state, countries: [...action.payload] };

    default:
      return state;
  }
};

export default reducer;
