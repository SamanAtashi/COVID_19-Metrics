/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Continents from './Continents';

const Home = () => {
  const continents = useSelector((state) => state.continents);
  const { pathname } = useLocation();

  return (
    <div className="border border-blue-500">
      {
(pathname === '/')

  ? (
    <div className="w-full h-52 grid grid-cols-3 text-center">
      {continents.length > 1
				  ? continents.map((item) => (
  <Link to={item.continent} key={item.continent}>
    {item.continent}
  </Link>
					  ))
				  : <p>loading</p>}
    </div>
  ) : null
}
      <div>
        <Routes>
          <Route
            path="Asia/*"
            element={<Continents name="Asia" />}
          />
          <Route
            path="Africa/*"
            element={<Continents name="Africa" />}
          />
          <Route
            path="Europe/*"
            element={<Continents name="Europe" />}
          />
          <Route
            path="North%20America/*"
            element={
              <Continents name="North America" />
						}
          />
          <Route
            path="South%20America/*"
            element={
              <Continents name="South America" />
						}
          />
          <Route
            path="Australia-Oceania/*"
            element={
              <Continents name="Australia-Oceania" />
						}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
