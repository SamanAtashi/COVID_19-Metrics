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
import PropTypes from 'prop-types';
import Countries from './Countries';
import { fetchCountries } from '../myredux/myreducer';

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
    for (let i = 0; i < countriesIamAt.length; i += 1) {
      for (let j = 0; j < data.length; j += 1) {
        if (countriesIamAt[i] === data[j].country) {
          occupied.push(data[j]);
        }
      }
    }
    if (occupied.length > 0) {
      setNewList([...occupied]);
    }
  }, [mystore]);

  const sortingHandler = (value) => {
    const sortedArr = newList.sort((a, b) => b[value] - a[value]);
    if (newList.length > 0) {
      setNewList([...sortedArr]);
    }
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
  if (continentIamAt.split(' ').length > 1) {
    (url = continentIamAt.split(' ').join('%20'));
  } else {
    (url = continentIamAt);
  }

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
              <span htmlFor="filtering">
                Sort by:
              </span>
              <select
                className="bg-transparent"
                name="filtering"
                id="filtering"
                onChange={(e) => sortingHandler(e.target.value)}
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

Continents.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Continents;
