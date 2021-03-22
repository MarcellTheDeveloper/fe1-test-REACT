import React, { useState, useEffect } from 'react';
import Subscription from './Subscription';
const Hotel = (props) => {
  const [show, setShow] = useState(false);

  const detailsShower = () => {
    setShow(!show);
  };

  return (
    <div>
      {props.data.name}
      <div>
        {!show ? '' : ` stars : ${props.data.stars} city : ${props.data.city}`}
      </div>
      <button onClick={detailsShower}>
        {show ? <p>Show Less</p> : <p>Show More</p>}
      </button>
      <div>{show ? <Subscription name={props.data.name} /> : ''}</div>
    </div>
  );
};

export default Hotel;
