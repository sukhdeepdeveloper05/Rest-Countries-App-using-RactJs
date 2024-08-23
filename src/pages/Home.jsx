import React, { useEffect, useState } from "react";
import searchIcon from "../assets/icons/search-sharp.svg";
import Card from "../components/Card";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkeleton } from "../components/Skeletons";

const Home = ({ countriesData, isDataLoaded }) => {
  const [filteredCountries, setFilteredCountries] = useState(countriesData);
  const [searchedCountries, setSearchedCountries] = useState(countriesData);
  const [isFilterMenuOpened, setIsFilterMenuOpened] = useState(false);

  useEffect(() => {
    setFilteredCountries(countriesData);
    setSearchedCountries(countriesData);

    return () => { };
  }, [countriesData]);

  const openMenuHandler = () => {
    isFilterMenuOpened
      ? setIsFilterMenuOpened(false)
      : setIsFilterMenuOpened(true);
  };

  const changeRegionHandler = (e) => {
    const filteredCountries = countriesData.filter((country) => {
      return country.region.includes(e.target.innerText);
    });
    setFilteredCountries(filteredCountries);
    setSearchedCountries(filteredCountries);
    document.querySelector(".search-input").value = "";
    document.querySelector(".selected-filter").innerText = e.target.innerText;
    setIsFilterMenuOpened(false);
  };

  const searchItemHandler = (e) => {
    let inputValue = e.target.value.toLowerCase();
    if (inputValue === "") {
      setSearchedCountries(filteredCountries);
    } else {
      setSearchedCountries(
        filteredCountries.filter((country) => {
          return country.name.common.toLowerCase().includes(inputValue);
        })
      );
    }
  };

  return (
    <>
      <main className="container">
        <form className="search-form">
          <div className="search-input__wrapper">
            <img
              src={searchIcon}
              alt="search icon"
              width="20px"
              height="20px"
            />
            <input
              type="text"
              name="search"
              placeholder="Search for a country..."
              className="search-input"
              autoComplete="false"
              onChange={searchItemHandler}
            />
          </div>
          <div className="select-filter__wrapper" onClick={openMenuHandler}>
            <div className="select-filter-region">
              <span className="selected-filter">Filter by region</span>
            </div>
            <ul className={`filter-options ${isFilterMenuOpened && "opened"}`}>
              <li onClick={changeRegionHandler}>Africa</li>
              <li onClick={changeRegionHandler}>America</li>
              <li onClick={changeRegionHandler}>Asia</li>
              <li onClick={changeRegionHandler}>Europe</li>
              <li onClick={changeRegionHandler}>Oceania</li>
            </ul>
          </div>
        </form>
        <div className="cards-container">
          {isDataLoaded &&
            searchedCountries.map((country) => {
              return <Card country={country} key={country.name.common} />;
            })}
          {!isDataLoaded && <CardSkeleton />}
        </div>
      </main>
    </>
  );
};

export default Home;
