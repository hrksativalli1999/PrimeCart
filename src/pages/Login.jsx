import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameEmpty, setUsernameEmpty] = useState("");
  const [passwordEmpty, setPasswordEmpty] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!username && !password) {
      setUsernameEmpty("*Please enter username");
      setPasswordEmpty("*Please enter password");
      return;
    }
    if (!username) {
      setUsernameEmpty("*Please enter your username");
      return;
    }
    if (!password) {
      setPasswordEmpty("*Please enter your password");
      return;
    }

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Login successfully");
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      alert("something went wrong..");
      console.log("error is: ", error);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Welcome to PrimeCart</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-gray-500">Login to your PrimeCart account</p>
        </div>
        <div className="mb-7">
          <label className="mb-2 block font-medium text-gray-700">Username</label>
          <input type="text" placeholder="Enter your username" value={username} onChange={(e) => { setUsername(e.target.value); setUsernameEmpty(""); }} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          {usernameEmpty && <p className="mt-1 text-sm text-red-600">{usernameEmpty}</p>}
        </div>
        <div className="mb-7">
          <label className="mb-2 block font-medium text-gray-700">Password</label>
          <input type="password" placeholder="Enter your password" value={password} onChange={(e) => { setPassword(e.target.value); setPasswordEmpty(""); }} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          {passwordEmpty && <p className="mt-1 text-sm text-red-600">{passwordEmpty}</p>}
        </div>
        <button onClick={handleClick} className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">Login</button>
        <div className="mt-6 border-t border-gray-100 pt-5 text-center">
          <p className="text-sm text-gray-600">New to PrimeCart?</p>
          <button onClick={() => navigate("/Register")} className="mt-2 font-semibold text-blue-600 hover:underline">Create New Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
