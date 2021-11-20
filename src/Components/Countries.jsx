import React from 'react';
import { useSelector } from 'react-redux';
import {
  useNavigate,
} from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import PropTypes from 'prop-types';

const Countries = (props) => {
  const { name } = props;

  const findCountry = useSelector((sth) => sth.countries.filter((item) => item.country === name));

  const navigate = useNavigate();

  const bringBackHandler = () => {
    const temp = `/${findCountry[0].continent.split(' ').join('%20')}`;
    return navigate(temp);
  };

  return (
    <div className=" w-full h-full overflow-hidden">
      <button
        className="flex items-center hover:text-black transition duration-500 ease-in-out pl-2 "
        type="button"
        onClick={() => bringBackHandler()}
      >
        <IoArrowBack />
        Back
      </button>
      <div className="w-full h-full center">
        {findCountry.length > 0 ? (
          <div className=" center space-y-4">
            <div className="w-56 h-40 ">
              <img
                className="shadow-md rounded-xl w-full h-full"
                src={findCountry[0].countryInfo.flag}
                alt={findCountry[0].country}
              />
            </div>
            <p>
              Country:
              {' '}
              <span className="text-xl font-bold italic text-gray-100">
                {findCountry[0].country}
              </span>
            </p>
            <p>
              Population:
              {' '}
              <span className="text-xl font-bold italic text-gray-100">
                {findCountry[0].population}
              </span>
            </p>
            <p>
              Recovered:
              {' '}
              <span className="text-xl font-bold italic text-gray-100">
                {findCountry[0].recovered}
              </span>
            </p>
            <p>
              Cases:
              {' '}
              <span className="text-xl font-bold italic text-gray-100">
                {findCountry[0].cases}
              </span>
            </p>
            <p>
              Tests:
              {' '}
              <span className="text-xl font-bold italic text-gray-100">
                {findCountry[0].tests}
              </span>
            </p>
            <p>
              Deaths:
              {' '}
              <span className="text-xl font-bold italic text-gray-100">
                {findCountry[0].deaths}
              </span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

Countries.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Countries;
