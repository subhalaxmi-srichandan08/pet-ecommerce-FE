import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaPaw, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (

    <header className="navbar">

      <div className="container navbar-container">

        <Link
          to="/"
          className="logo"
        >

          <FaPaw />

          PawPoint

        </Link>

        <nav>

          <Link to="/" >Home</Link>

          <Link to="/">Dogs</Link>

          <Link to="/">Cats</Link>

          <Link to="/">Products</Link>

          <Link to="/">About</Link>

          <Link to="/">Contact</Link>

        </nav>

        <div className="nav-icons">

          <FaShoppingCart />

          <FaUser
            onClick={() => navigate("/register")}
            title="Register"
          />

        </div>

      </div>

    </header>

  );

}

export default Navbar;