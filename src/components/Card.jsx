import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = (props) =>  {

  return (
      <div className="Card">
          <h2 className="name">{"Crew Name: " + props.name}</h2>
          <h3 className="speed">{"Speed: " + props.speed}</h3>
          <p className="color">{"Color: " + props.color}</p>
          <Link to={`/edit/${props.id}`}><button className="editButton">Edit</button></Link>
          <Link to={`/info/${props.id}`}>
            <button className="infoButton">ℹ️ Info</button>
          </Link>
      </div>
  );
};

export default Card;
