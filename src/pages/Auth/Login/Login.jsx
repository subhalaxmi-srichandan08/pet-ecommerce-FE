import "./Login.css";

function Login(){

  return (

    <div className="auth-page">

      <form className="auth-form">

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button
          className="btn btn-primary"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;