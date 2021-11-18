/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Countries from './Countries/Countries';
import { fetchCountries } from '../Redux/reducer';

const Continents = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  // ! ----------------------------------------------------
  const { name: continentIamAt } = props;

  const mystore = useSelector((state) => state);

  const [countriesIamAt, setCountriesIamAt] = useState([]);

  useEffect(() => {
    const tempCountries = mystore.continents.filter(
      (item) => item.continent === continentIamAt,
    );
    if (tempCountries.length > 0) {
      setCountriesIamAt([...tempCountries[0].countries]);
    }
  }, [mystore]);

  const [newList, setNewList] = useState([]);

  useEffect(() => {
    const occupied = [];
    const data = mystore.countries;
    for (let i = 0; i < countriesIamAt.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (countriesIamAt[i] === data[j].country) {
          occupied.push(data[j]);
        }
      }
    }
    (occupied.length > 0) ? setNewList([...occupied]) : null;
  }, [mystore]);

  const sortingHandler = (value) => {
    const sortedArr = newList.sort((a, b) => b[value] - a[value]);
    newList.length > 0 ? setNewList([...sortedArr]) : null;
  };

  // ! ----------------------------------------------------

  const countriesLI = () => newList.map((item) => (
    <Link to={item.country} key={item.country}>
      {item.country}
    </Link>
  ));

  const countriesRoute = () => newList.map((item) => {
    const temp = item.country.split(' ').join('%20');
    return (
      <Route
        key={item.country}
        path={temp}
        element={<Countries name={item.country} />}
      />
    );
  });

  const { pathname } = useLocation();

  let url = '';
  continentIamAt.split(' ').length > 1
    ? (url = continentIamAt.split(' ').join('%20'))
    : (url = continentIamAt);

  // ! ----------------------------------------------------

  return (
    <div className="border border-red-500">
      {
(pathname === `/${url}`)

  ? (
    <div>
      <p>------------</p>
      <form>
        <label htmlFor="filtering">Sort by:</label>
        <select
          name="filtering"
          id="filtering"
          onChange={(e) => sortingHandler(e.target.value)}
        >
          <option>Nothing</option>
          <option value="population">Population</option>
          <option value="deaths">Deaths</option>
          <option value="recovered">Recovered</option>
        </select>
      </form>
      <p>------------</p>
      <button type="button" onClick={() => navigate('/')}>
        Back
      </button>
      <p>------------</p>
      {newList.length > 0 ? countriesLI() : <p>loading</p>}
    </div>
  ) : null
}
      <Routes>
        {newList.length > 0 ? countriesRoute() : null}
      </Routes>
    </div>
  );
};

export default Continents;
