import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  const initials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  console.log(initials);

  return (
    <div className="App ">
      {initials &&
        initials.map((each, i) => (
          <Link key={i} className="alphabets" to="/CountriesList" state={each}>
            {each}
          </Link>
        ))}
    </div>
  );
}

export default Home;
