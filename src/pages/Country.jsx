import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import leftArrow from "../assets/icons/left-arrow.svg";
import axios from "axios";
import { CountrySkeleton } from "../components/Skeletons";
import Error from "./Error";

const Country = () => {
  const { countryCode } = useParams();
  const [countryData, setCountryData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [pageFound, setPageFound] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        const resData = await response.data;
        setCountryData(...resData);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        setPageFound(false);
      }
    };

    fetchData();
  }, [countryCode]);

  return !isFetching ? (
    pageFound ? (
      <main className="container">
        <Link to={"/"} className="button back-button">
          <img src={leftArrow} alt="arrow left" width="20px" height="18px" />
          Back
        </Link>
        <div className="country-wrapper">
          <div className="country-image">
            <img src={countryData.flags.svg} alt={countryData.flags.alt} />
          </div>
          <div className="country-info">
            <h1 className="country-name">{countryData.name.common}</h1>
            <div className="country-info-blocks">
              <ul className="country-info-block">
                <li>
                  Native Name:{" "}
                  <span>
                    {" "}
                    {Object.values(countryData.name.nativeName).pop().common}
                  </span>
                </li>
                <li>
                  Population:{" "}
                  <span>{countryData.population.toLocaleString("en-IN")}</span>
                </li>
                <li>
                  Region: <span>{countryData.region}</span>
                </li>
                <li>
                  Sub Region: <span>{countryData.subregion}</span>
                </li>
                <li>
                  Capital: <span>{countryData.capital}</span>
                </li>
              </ul>
              <ul className="country-info-block">
                <li>
                  Top Level Domain:{" "}
                  <span>{countryData.tld ? countryData.tld[0] : "--"}</span>
                </li>
                <li>
                  Currencies:{" "}
                  <span>{Object.values(countryData.currencies)[0].name}</span>
                </li>
                <li>
                  Languages:{" "}
                  <span>{Object.values(countryData.languages).join(", ")}</span>
                </li>
              </ul>
            </div>
            <div className="border-countries-wrapper">
              <p>Border Countries: </p>
              <div className="border-countries">
                {countryData.borders &&
                  countryData.borders.map((Country, index) => {
                      return index < 5 && (
                        <Link
                          className="button border-country-btn"
                          to={`/${Country}`}
                          key={index}
                        >
                          {Country}
                        </Link>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>
    ) : (
      <Error/>
    )
  ) : (
    <CountrySkeleton />
  );
};

export default Country;
