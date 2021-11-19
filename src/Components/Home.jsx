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
import Africa from '../Assets/Africa.png';
import Asia from '../Assets/Asia.jpeg';
import AO from '../Assets/Australia-Oceania.jpeg';
import Europe from '../Assets/Europe.jpeg';
import NorthAmerica from '../Assets/North America.jpeg';
import SouthAmerica from '../Assets/South America.jpeg';
import Continents from './Continents';

const Home = () => {
  const continents = useSelector((state) => state.continents);
  const { pathname } = useLocation();

  const myLinks2 = () => (
    <div className="w-full h-full grid grid-cols-2 justify-between items-end">
      <Link
        className="w-full h-full relative"
        to={continents[0].continent}
        key={continents[0].continent}
      >
        <img
          className="continentWhiteImg"
          alt="NorthAmerica"
          src={NorthAmerica}
        />
        <p className="continentWhiteText">
          {continents[0].continent}
        </p>
      </Link>
      <Link
        className="w-full h-full relative"
        to={continents[1].continent}
        key={continents[1].continent}
      >
        <img
          className="continentWhiteImg"
          alt="Asia"
          src={Asia}
        />
        <p className="continentBlackText">
          {continents[1].continent}
        </p>
      </Link>
      <Link
        className="w-full h-full relative"
        to={continents[2].continent}
        key={continents[2].continent}
      >
        <img
          className="continentWhiteImg"
          alt="SouthAmerica"
          src={SouthAmerica}
        />
        <p className="continentBlackText">
          {continents[2].continent}
        </p>
      </Link>
      <Link
        className="w-full h-full relative"
        to={continents[3].continent}
        key={continents[3].continent}
      >
        <img
          className="continentWhiteImg"
          alt="Europe"
          src={Europe}
        />
        <p className="continentWhiteText">
          {continents[3].continent}
        </p>
      </Link>
      <Link
        className="w-full h-full relative"
        to={continents[4].continent}
        key={continents[4].continent}
      >
        <img
          className="continentWhiteImg"
          alt="Africa"
          src={Africa}
        />
        <p className="continentWhiteText">
          {continents[4].continent}
        </p>
      </Link>
      <Link
        className="w-full h-full relative"
        to={continents[5].continent}
        key={continents[5].continent}
      >
        <img className="continentWhiteImg" alt="AO" src={AO} />
        <p className="continentBlackText">
          {continents[5].continent}
        </p>
      </Link>
    </div>
  );

  return (
    <div className="ring-4 ring-black ring-offset-2 ring-offset-pink-300 rounded-xl h-mydisplay w-96 shadow-2xl">
      {pathname === '/' ? (
        <div className="w-full h-full">
          <h1 className="w-full h-1/6 text-2xl font-bold center">
            <span className="shadow-sm">
              Welcome to Covid-Today
            </span>
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
      {continents.length > 1 ? (

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

      ) : null}
    </div>
  );
};

export default Home;
