import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faList, faColumns, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { changeView } from "../features/viewSlice";

const Header = () => {
  const [myOpinion, setMyOpinion] = useState(false);
  const { grid } = useSelector((state: RootState) => state.grid);
  console.log("grid", grid);
  const dispatch = useDispatch();
  return (
    <header>
      <h1>
        <Link to="/" className="logo">
          GnNews
        </Link>
      </h1>
      <div>
        {(!!grid && (
          <button className="btn" onClick={() => dispatch(changeView(!grid))}>
            <FontAwesomeIcon icon={faList as IconProp} />
          </button>
        )) || (
          <button className="btn" onClick={() => dispatch(changeView(!grid))}>
            <FontAwesomeIcon icon={faColumns as IconProp} />
          </button>
        )}

        <button className="btn" onClick={() => setMyOpinion(!myOpinion)}>
          Opinion
        </button>
      </div>

      {myOpinion && (
        <div className="opinion-popup">
          <p>
            Personally I think each component was interesting and maybe a bit
            sneaky/tricky/challenging for me was the part when I decided to add
            Typescript which sometimes was not happy and made me to search for
            errors and at the end it was very helpful to develop this app BUT I
            got sick and spend around 14hrs on the app already starting from
            scratch. Also instaling Jest library took more 2 hrs as I didnt know
            how to properly install it with Vite... At the end I really enjoy
            the design and the app that I have created.. thanks for the
            challenge :)
          </p>
          <button
            className="btn btn-opinion"
            onClick={() => setMyOpinion(false)}
          >
            <FontAwesomeIcon icon={faClose as IconProp} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
