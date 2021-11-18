/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

const Countries = (props) => {
  const { name } = props;
  const findCountry = useSelector((state) => state.countries.filter((item) => item.country === name));
  console.log(findCountry);
  return (
    <div>
      <p>----------------|||||||||||||||||---------------------</p>
      {(findCountry.length > 0)

        ? (
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
        )
        : null}
    </div>
  );
};

export default Countries;
