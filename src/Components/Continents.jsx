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
import { MdAdsClick } from 'react-icons/md';
import { IoArrowBack } from 'react-icons/io5';
import Countries from './Countries';
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
    <Link
      to={item.country}
      key={item.country}
      className="relative"
    >
      <img
        className="continentWhiteImg"
        alt={item.country}
        src={item.countryInfo.flag}
      />
      <p className="continentWhiteText flex items-center justify-between px-1">
        {item.country}
        <MdAdsClick />
      </p>
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
    <div className="w-full h-full pt-2 overflow-y-scroll scrollbar-hide">
      {pathname === `/${url}` ? (
        <div className="grid grid-cols-2">
          <div className="col-span-2 flex items-center justify-between px-2 pb-2">
            <button
              className="flex items-center hover:text-black transition duration-500 ease-in-out"
              type="button"
              onClick={() => navigate('/')}
            >
              <IoArrowBack />
              Back
            </button>
            <form>
              <label htmlFor="filtering">
                Sort by:
              </label>
              <select
                className="bg-transparent"
                name="filtering"
                id="filtering"
                onChange={(e) => sortingHandler(
								    e.target.value,
								  )}
              >
                <option>Nothing</option>
                <option value="population">
                  Population
                </option>
                <option value="deaths">
                  Deaths
                </option>
                <option value="recovered">
                  Recovered
                </option>
              </select>
            </form>
          </div>
          {newList.length > 0 ? (
            countriesLI()
          ) : (
            <p>loading</p>
          )}
        </div>
      ) : null}
      <Routes>
        {newList.length > 0 ? countriesRoute() : null}
      </Routes>
    </div>
  );
};

export default Continents;
