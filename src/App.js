import { useQuery, gql } from "@apollo/client";
import "./App.css";

const COUNTRY_DATA = gql`
  query Country {
    countries {
      name
    }
  }
`;
function App() {
  const { data, loading, error } = useQuery(COUNTRY_DATA);

  if (loading) return "loading..";
  if (error) return <pre>{error.message}</pre>;
  console.log(data);

  return (
    <div className="App">
      {data.countries.map((each, index) => (
        <ul>
          <li key={index}>
            <a href="/">{each.name}</a>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
