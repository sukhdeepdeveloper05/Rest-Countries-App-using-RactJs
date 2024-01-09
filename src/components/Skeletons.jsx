import React from "react";
import leftArrow from "../assets/icons/left-arrow.svg";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export const CardSkeleton = () => {
  return Array(8)
    .fill(0)
    .map((item, i) => {
      return (
        <div className="card" key={i}>
          <Skeleton
            className="card-image"
            height="170px"
            borderRadius="5px"
            style={{ display: "inline-block" }}
          />
          <div className="card-details">
            <Skeleton className="card-name" />
            <Skeleton className="population" />
            <Skeleton className="region" />
            <Skeleton className="capital" />
          </div>
        </div>
      );
    });
};

export const CountrySkeleton = () => {
  return (
    <main className="container">
      <Link to={"/"} className="button back-button">
        <img src={leftArrow} alt="arrow left" width="20px" height="18px" />
        Back
      </Link>
      <div className="country-wrapper">
        <div className="country-image">
          <Skeleton style={{aspectRatio:"3/2", width:"100%"}} />
        </div>
        <div className="country-info">
          <Skeleton className="country-name" height="30px" />
          <div className="country-info-blocks">
            <ul className="country-info-block" style={{ width: "40%" }}>
              <Skeleton count={5}  height="22px"/>
            </ul>
            <ul className="country-info-block" style={{ width: "40%" }}>
              <Skeleton count={3}  height="22px"/>
            </ul>
          </div>
          <div className="border-countries-wrapper" style={{flexDirection:"column", alignItems:"normal"}}>
            <Skeleton height="30px" />
          </div>
        </div>
      </div>
    </main>
  );
};
