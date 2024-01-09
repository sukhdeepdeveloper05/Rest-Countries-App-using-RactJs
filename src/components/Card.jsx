import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link
      to={`${props.country.cioc ? props.country.cioc : props.country.cca3}`}
      className="card"
    >
      <div className="card-image">
        <img src={props.country.flags.png} alt={props.country.flags.alt} />
      </div>
      <div className="card-details">
        <h2 className="card-name">{props.country.name.common}</h2>
        <p className="population">
          Population:{" "}
          <span>{props.country.population.toLocaleString("en-IN")}</span>
        </p>
        <p className="region">
          Region: <span>{props.country.region}</span>
        </p>
        <p className="capital">
          Capital: <span>{props.country.capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
