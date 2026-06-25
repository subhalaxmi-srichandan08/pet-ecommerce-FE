import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">

      <div className="container nav-wrapper">

        <Link to="/">
          PetStore
        </Link>

        <ul>

          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/login">
              Login
            </Link>
          </li>

          <li>
            <Link to="/register">
              Register
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;