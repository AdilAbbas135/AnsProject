import { LockClosedIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [username, setusername] = useState();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign up | Chainraise";
  }, []);

  const CreateAccount = async () => {
    setloading(true);
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/account/createaccount`, {
        email,
        password,
        username,
      })
      .then((result) => {
        console.log(result);
        if (result.data?.success) {
          navigate("/auth/signup/sendemail");
        }
      })
      .catch((error) => {
        setloading(false);
        console.log(error);
        toast.error(
          error?.response?.data?.error
            ? error.response.data.error
            : "Something went wrong! Try Again",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="py-6">
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white py-6 px-12">
              <div>
                <Link to="/">
                  {/* eslint-disable-next-line */}
                  <a>
                    <img
                      className="mx-auto h-12 w-auto"
                      src="/assets/chainraise_logo_black_text.jpeg"
                      alt=""
                    />
                  </a>
                </Link>
                <h2 className="mt-6 text-center text-xl font-bold text-gray-900">
                  Create a New Account
                </h2>
              </div>
              <form
                className="mt-8 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  CreateAccount();
                }}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="username" className="sr-only">
                      User Name
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      autoComplete="username"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="username"
                    />
                  </div>
                  <div className="mt-8 space-y-6">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      autoComplete="email"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="mt-8 space-y-6">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading ? true : false}
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
