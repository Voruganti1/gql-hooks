import React from "react";
import { COUNTRY_FILTERED_DATA } from "../GraphQL/query";
import { useQuery } from "@apollo/client";
//import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function CountryData(props) {
  // const selectedCountry = useLocation().state?.name;
  const { countryCode } = useParams();
  const { data, loading, error } = useQuery(COUNTRY_FILTERED_DATA, {
    variables: { filter: { code: { eq: countryCode } } },
  });

  if (loading) return "loading..";
  if (error) return <pre>{error.message}</pre>;
  if (!data) return "Data not found";
  return (
    <div>
      {data.countries
        //.filter((eachCountry) => eachCountry.name === selectedCountry)
        .map((selected, i) => (
          <ul key={i}>
            <li>{selected.name}</li>
            <li>{selected.phone}</li>
            <li>{selected.code}</li>
          </ul>
        ))}
    </div>
  );
}

export default CountryData;
