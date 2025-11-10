import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const auth = getAuth();

  
  const isValidPassword = (password) => {
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    const length = password.length >= 6;
    return upper && lower && length;
  };

  
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (!isValidPassword(password)) {
      setError(
        "Password must contain at least 6 characters, one uppercase, and one lowercase letter."
      );
      toast.error("Invalid password format!");
      return;
    }

    signIn(email, password)
      .then(() => {
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Login Failed! " + error.code);
      });
  };

 
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Google Login Failed! " + error.message);
      });
  };

  
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = prompt("Please enter your registered email:");

    if (!email) {
      toast.error("Email is required to reset password!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your Gmail.");
      })
      .catch((err) => {
        toast.error("Failed to send reset email: " + err.message);
      });
  };

  return (
    <div className="flex justify-center items-center my-20">
      <ToastContainer position="top-center" />
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl font-bold text-center mt-5">Login Your Account</h2>

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input w-full pr-10"
                placeholder="Password"
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            {/* Forgot Password */}
            <div className="mt-2">
              <button
                onClick={handleForgotPassword}
                className="link link-hover text-blue-600"
              >
                Forgot password?
              </button>
            </div>

            {/* Google Login */}
            <div
              onClick={handleGoogleLogin}
              className="flex justify-center items-center gap-3 btn mt-3"
            >
              <FcGoogle /> Continue With Google
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

        
            <p className="text-center text-sm mt-3">
              Don’t Have An Account?
              <span className="text-red-500 font-semibold">
                <Link to="/auth/regester"> Register</Link>
              </span>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
