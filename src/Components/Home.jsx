import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const countries = useSelector((state) => state);

  const countriesHandler = () => countries.map((item) => (
    <button type="button" key={item.continent} className="border mx-10">{item.continent}</button>
  ));

  return (
    <div>
      {countriesHandler()}
    </div>
  );
};

export default Home;
