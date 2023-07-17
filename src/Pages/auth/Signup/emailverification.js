import { CircularProgress } from "@mui/material";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createAlert } from "../../../Redux/Alert";

const Emailverification = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sucess, setsucess] = useState(undefined);
  const [error, seterror] = useState(undefined);
  const user = new URLSearchParams(useLocation().search).get("user");
  const token = new URLSearchParams(useLocation().search).get("token");

  useEffect(() => {
    const verifyemail = async () => {
      await axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/account/verifyemail/${user}/${token}`
        )
        .then((response) => {
          console.log(response);
          localStorage.setItem("authtoken", response.data.authtoken);
          navigate("/");
          setsucess(true);
          dispatch(
            createAlert({
              type: "success",
              message: "Now You Can Sign Into Your Account",
              options: {
                position: "top-right",
              },
            })
          );
        })
        .catch((err) => {
          console.log(err);
          seterror(true);
          dispatch(
            createAlert({
              type: "error",
              message: "Something went wrong! Try again later",
              options: {
                position: "top-right",
              },
            })
          );
        });
    };
    verifyemail();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col items-center justify-center">
      {!error && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl">Verifying Your Email Address</h1>
          <div className="mt-5 flex space-x-3 items-center">
            <CircularProgress size={30} disableShrink />
            <h2 className="font-semibold">Kindly please wait</h2>
          </div>
          {sucess && (
            <>
              <p className="italic mt-3 text-red-500">
                Redirecting you to the profile setup page
              </p>
            </>
          )}
        </div>
      )}

      {error && (
        <>
          <p className="italic mt-3 text-red-500 font-bold text-4xl">
            Invalid Link
          </p>
          <div className="mt-3">
            <Link
              to={"/"}
              className=" text-main_bg_color font-bold text-xl underline "
            >
              Go to Home
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Emailverification;
