/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  useNavigate,
} from 'react-router-dom';

const Countries = (props) => {
  const { name } = props;

  const findCountry = useSelector((state) => state.countries.filter((item) => item.country === name));

  const navigate = useNavigate();

  const bringBackHandler = () => {
    const temp = `/${findCountry[0].continent.split(' ').join('%20')}`;
    return navigate(temp);
  };

  return (
    <div>
      <button type="button" onClick={() => bringBackHandler()}>
        Back
      </button>
      <p>----------------|||||||||||||||||---------------------</p>
      {findCountry.length > 0 ? (
        <div>
          <p>
            country:
            {' '}
            {findCountry[0].country}
          </p>
          <p>
            population:
            {' '}
            {findCountry[0].population}
          </p>
          <p>
            cases:
            {' '}
            {findCountry[0].cases}
          </p>
          <p>
            tests:
            {' '}
            {findCountry[0].tests}
          </p>
          <p>
            deaths:
            {' '}
            {findCountry[0].deaths}
          </p>
          <p>
            recovered:
            {' '}
            {findCountry[0].recovered}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Countries;
