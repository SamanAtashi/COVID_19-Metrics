/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Africa from './Assets/Africa.png';
import Asia from './Assets/Asia.jpeg';
import AO from './Assets/Australia-Oceania.jpeg';
import Europe from './Assets/Europe.jpeg';
import NorthAmerica from './Assets/North America.jpeg';
import SouthAmerica from './Assets/South America.jpeg';
import Continents from './Continents';

const Home = () => {
  const continents = useSelector((state) => state.continents);
  const { pathname } = useLocation();

  //   const myLinks = () => continents.map((item) => (
  //     <Link
  //       className="w-full"
  //       to={item.continent}
  //       key={item.continent}
  //     >
  //       {item.continent}
  //     </Link>
  // 						  ));

  const myLinks2 = () => (
    <div className="w-full h-full grid grid-cols-2 justify-between items-end">
      <Link
        className="w-full h-full relative"
        to={continents[0].continent}
        key={continents[0].continent}
      >
        <img
          className="object-cover w-full h-full bg-white opacity-50"
          alt="NorthAmerica"
          src={NorthAmerica}
        />
        <p className="absolute top-0 left-0 text-black w-full h-full bg-primary ">
          {continents[0].continent}
        </p>
      </Link>
      <Link
        className="w-full h-full relative"
        to={continents[1].continent}
        key={continents[1].continent}
      >
        <img
          className="object-cover w-full h-full bg-white filter grayscale opacity-50"
          alt="Asia"
          src={Asia}
        />
        <p className="absolute top-0 left-0 text-black w-full h-full bg-secondary">
          {continents[1].continent}
        </p>
      </Link>
      <Link
        className="w-full h-full relative"
        to={continents[2].continent}
        key={continents[2].continent}
      >
        <img
          className="object-cover w-full h-full bg-white filter grayscale"
          alt="SouthAmerica"
          src={SouthAmerica}
        />
        <p className="absolute top-0 left-0 text-black">
          {continents[2].continent}
        </p>
      </Link>
      <Link
        className="w-full h-full relative"
        to={continents[3].continent}
        key={continents[3].continent}
      >
        <img
          className="object-cover w-full h-full bg-white filter grayscale"
          alt="Europe"
          src={Europe}
        />
        <p className="absolute top-0 left-0 text-black">
          {continents[3].continent}
        </p>
      </Link>
      <Link
        className="w-full h-full relative"
        to={continents[4].continent}
        key={continents[4].continent}
      >
        <img
          className="object-cover w-full h-full bg-white filter grayscale"
          alt="Africa"
          src={Africa}
        />
        <p className="absolute top-0 left-0 text-black">
          {continents[4].continent}
        </p>
      </Link>
      <Link
        className="w-full h-full relative"
        to={continents[5].continent}
        key={continents[5].continent}
      >
        <img
          className="object-cover w-full h-full bg-white filter grayscale"
          alt="AO"
          src={AO}
        />
        <p className="absolute top-0 left-0 text-black">
          {continents[5].continent}
        </p>
      </Link>
    </div>
  );

  return (
    <div className="ring-4 ring-black ring-offset-2 ring-offset-pink-300 rounded-xl h-mydisplay w-96 shadow-2xl">
      {pathname === '/' ? (
        <div className="w-full h-full">
          <h1 className="w-full h-1/6 text-center align-middle text-2xl font-bold">
            Welcome to Covid-Today
          </h1>
          <div className="w-full h-5/6">
            {continents.length > 1 ? (
						  myLinks2()
            ) : (
              <p>loading</p>
            )}
          </div>
        </div>
      ) : null}
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
