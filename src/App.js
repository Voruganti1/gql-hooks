import "./App.css";
import CountriesList from "./Components/CountriesList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryData from "./Components/CountryData";
import Home from "./Components/Home";

function App() {
  // const { data, loading, error } = useQuery(COUNTRY_DATA);

  // if (loading) return "loading..";
  // if (error) return <pre>{error.message}</pre>;
  // console.log(data);

  return (
    <Router>
      <Routes>
        <Route path="/CountriesList" element={<CountriesList />} />
        <Route path="/" element={<Home />} />

        <Route path="/CountryData/:countryCode" element={<CountryData />} />
      </Routes>
    </Router>
  );
}

export default App;
