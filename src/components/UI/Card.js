import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;// a constant way to achive the clases property

  return <div className={classes}>{props.children}</div>;
};

export default Card;