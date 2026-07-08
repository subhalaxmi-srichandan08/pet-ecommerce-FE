import "./Home.css";
import hero from "../../assets/cat_dog.jpeg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (

    <>

      <section className="hero">

        <div className="container hero-container">

          <div className="hero-content">

            <span>

              🐾 Welcome to PawPoint

            </span>

            <h1>

              Everything Your Pet Deserves

            </h1>

            <p>

              Discover premium food, toys,
              grooming products and accessories
              for your furry friends.

            </p>

            <div className="hero-buttons">

              <button
                onClick={() => navigate("/register")}
              >
                Shop Dogs
              </button>

              <button
                className="secondary"
                onClick={() => navigate("/register")}
              >
                Shop Cats
              </button>

            </div>

          </div>

          <div className="hero-image">

            <img
              src={hero}
              alt="Pet"
            />

          </div>

        </div>

      </section>

    </>

  );

}

export default Home;