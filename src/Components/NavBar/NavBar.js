import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <Link to="/" className="navbar-brand ml-5">
        Home
      </Link>
    </nav>
  );
};

export default NavBar;
