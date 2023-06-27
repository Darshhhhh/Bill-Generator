import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const LoginHandler = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className="MainLoginBg flex justify-center items-center">
        <div className="LoginBox flex flex-col justify-center items-center gap-5 py-5 shadow-lg">
          <h1 className="font-semibold mb-3">Sign in</h1>
          <input
            type="text"
            placeholder="Email"
            className="w-60 md:w-80 lg:w-80"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-60 md:w-80 lg:w-80"
          />
          <button
            className="bg-teal-900 text-white hover:bg-transparent hover:text-teal-900 hover:border hover:border-teal-900"
            onClick={LoginHandler}
          >
            Login
          </button>
          <p
            className="text-blue-600 text-sm underline hover:cursor-pointer"
            onClick={() => navigate("/create/user")}
          >
            New User?Click to Sign Up
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
