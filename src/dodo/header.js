import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="head">
        <Link to="/" className="title">mohamad</Link>
        <div className="a">
          <NavLink to="/js" className="aa">JS</NavLink>
          <NavLink to="/html" className="aa">Html</NavLink>
          <NavLink to="/css" className="aa">Css</NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
