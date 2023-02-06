import React from "react";
import { COUNTRY_DATA } from "../GraphQL/query";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import { useState } from "react";

function CountriesList(props) {
  const { data, loading, error } = useQuery(COUNTRY_DATA);
  const selectedLetter = useLocation().state;

  console.log("this is the letter from list", selectedLetter);
  if (loading) return "loading..";
  if (error) return <pre>{error.message}</pre>;
  if (!data) return "Data not found";
  const items = [...data?.countries].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const countries = items.filter(
    (each) => each.name.charAt(0) === selectedLetter
  );
  console.log(countries);
  return (
    <div>
      <div className="App">
        {countries.map((each, i) => (
          <ul key={i}>
            <li>
              <Link
                to={`/CountryData/${each.code}`}

                //state={{ name: each.code }}
              >
                {each.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
