import { useContext, ReactElement } from "react";
import { ArticlesContext } from "../context/ArticlesContext";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";

const Sidebar = (): ReactElement => {
  const { countries } = useContext(ArticlesContext);

  return (
    <section className="sidebar">
      <ul>
        {countries.map((country, index) => {
          return (
            <li key={index} className="country">
              <Flag code={country} height="28" width="28" />
              <Link to={`country/${country}`} className="country-link">
                {country.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
