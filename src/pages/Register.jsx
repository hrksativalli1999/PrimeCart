import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (Object.values(formData).some((value) => !value.trim())) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
          name: { firstname: formData.firstname, lastname: formData.lastname },
        }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        navigate("/Login");
      } else {
        alert("Registration failed");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Join PrimeCart</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="mt-2 text-gray-500">Create your account and start shopping.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input type="text" name="firstname" placeholder="First name" value={formData.firstname} onChange={handleChange} className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          <input type="text" name="lastname" placeholder="Last name" value={formData.lastname} onChange={handleChange} className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
        </div>
        <div className="mt-4 space-y-4">
          <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
        </div>
        <button onClick={handleRegister} className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">Create Account</button>
        <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <button onClick={() => navigate("/Login")} className="font-semibold text-blue-600 hover:underline">Login</button></p>
      </div>
    </div>
  );
};

export default Register;
