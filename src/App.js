import { useEffect, useState } from "react";
import Home from "./pages/Home";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Country from "./pages/Country";
import Header from "./components/Header";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const fetchData = async () => {
    try {
      setIsDataLoaded(false);
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const resData = await response.data;
      setCountriesData(resData);
      setIsDataLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home countriesData={countriesData} isDataLoaded={isDataLoaded} />
          }
        />
        <Route path="/:countryCode" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
