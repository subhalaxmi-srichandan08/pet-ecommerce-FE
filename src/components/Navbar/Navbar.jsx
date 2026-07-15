import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaPaw, FaShoppingCart, FaUser } from "react-icons/fa";
import authService from "../../services/authService";
import useAuthStore from "../../store/authStore";

function Navbar() {

  const navigate = useNavigate();

  const user = useAuthStore(state => state.user);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const logoutStore = useAuthStore(state => state.logout);

  const handleLogout = async () => {

    try {

      await authService.logout();

    } catch (error) {

      console.log(error);

    } finally {

      logoutStore();

      navigate("/login", { replace: true });

    }

  };

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (

    <header className="navbar">

      <div className="container navbar-container">

        <Link to="/" className="logo">

          <FaPaw />

          PawPoint

        </Link>

        <nav>

          <Link to="/">Home</Link>

          <Link to="/">Dogs</Link>

          <Link to="/">Cats</Link>

          <Link to="/">Products</Link>

          <Link to="/">About</Link>

          <Link to="/">Contact</Link>

        </nav>

        <div className="nav-icons">

          <FaShoppingCart
            onClick={() => navigate("/cart")}
          />

          {
            isAuthenticated ?

              <div className="user-section">

                <span className="user-name">

                  <FaUser />

                  {capitalizeFirstLetter(user?.firstName)}

                </span>

                <button
                  className="nav-logout-btn"
                  onClick={handleLogout}
                >

                  Logout

                </button>

              </div>

              :

              <>

                <span
                  onClick={() => navigate("/login")}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600"
                  }}
                >

                  Login

                </span>

                <span
                  onClick={() => navigate("/register")}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#2d6cdf"
                  }}
                >

                  Register

                </span>

              </>

          }

        </div>

      </div>

    </header>

  );

}

export default Navbar;