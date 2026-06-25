import "./Login.css";

function Register(){

  return (

    <div className="auth-page">

      <form className="auth-form">

        <h2>Register</h2>

        <input
          placeholder="First Name"
        />

        <input
          placeholder="Last Name"
        />

        <input
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button
          className="btn btn-primary"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;