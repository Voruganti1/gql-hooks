import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  // const initials = Array.from(Array(26).map((e, i) => i + 65));
  const initials = [];
  for (let i = 65; i <= 90; i++) {
    initials.push(String.fromCharCode(i));
  }
  //const initials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
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
