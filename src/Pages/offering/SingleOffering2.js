import { Spin, Tabs } from "antd";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/navigation/Header";
import StripeCheckout from "react-stripe-checkout";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import { createAlert } from "../../Redux/Alert";

const SingleOffering2 = () => {
  const CheckoutbtnRef = useRef();
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.session);
  const location = useLocation();
  //eslint-disable-next-line
  const [investbtn, setinvestbtn] = useState(false);
  const token = localStorage.getItem("authtoken");
  const [singleoffering, setsingleoffering] = useState();
  const [loading, setloading] = useState(true);
  const [PaymentLoading, setPaymentLoading] = useState(false);

  const stripeKey =
    "pk_test_51JGojQHB8vwABSSpHM2xByAZIfXbe0OIFVUmcrexiKkJmzHZAAj8457O7BuGXCiNkzQWWKpWsUiLQJj6ZTDXIpCS00RsoWj3HG";
  const [StripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    if (StripeToken) {
      setPaymentLoading(true);
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/donate/payment`,
          {
            tokenId: StripeToken?.id,
            amount: singleoffering?.target,
            OfferingId: singleoffering?._id,
            RecieverId: singleoffering?.issuerId,
          },
          { headers: { token: token } }
        )
        .then((res) => {
          setPaymentLoading(false);
          console.log(res);
          dispatch(
            createAlert({
              type: "success",
              message: "Payment Made Successfull",
              options: {
                position: "top-right",
              },
            })
          );
        })
        .catch((err) => {
          setPaymentLoading(false);
          dispatch(
            createAlert({
              type: "error",
              message: "Something went wrong! Try again later",
              options: {
                position: "top-right",
              },
            })
          );
          console.log(err);
        });
    }
    //eslint-disable-next-line
  }, [StripeToken]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/offerings/getsingleoffering/${location?.state?._id}`
      )
      .then((result) => {
        console.log(result.data.offer);
        setsingleoffering(result?.data?.offer);
        setloading(false);
      })
      .catch((error) => {
        toast.error("Something Went Wrong! Reload the Page", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header />

      {loading ? (
        <div className="h-screen flex items-center justify-center bg-[#F3F4F6]">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading....</h2>
        </div>
      ) : (
        <>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={PaymentLoading}
          >
            <div className="flex items-center justify-center gap-3">
              <CircularProgress color="inherit" />{" "}
              <p>Making Payment! Please Wait</p>
            </div>
          </Backdrop>
          <div className="bg-[#F7F7F7]">
            <hr className="h-[50px]" />
            <div
              style={{
                boxShadow:
                  "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
              }}
              className="max-w-6xl m-auto rounded-md bg-white"
            >
              <div className="relative banner w-full h-72  ">
                <img
                  src={singleoffering?.bannerImage}
                  alt=""
                  className=" bg-center bg-no-repeat object-cover w-full h-full rounded-md"
                />
                <div>
                  <div className="flex justify-center mt-[10px]">
                    <div
                      style={{
                        boxShadow:
                          "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
                      }}
                      className="small:flex small:items-center absolute -bottom-[7rem] small:-bottom-[5rem] medium:left-8 bg-white px-10 py-5 rounded-md max-w-lg"
                    >
                      <img
                        src={singleoffering?.logoImage}
                        alt=""
                        className="bg-cover w-24 h-24 m-auto md:w-28 md:h-28 rounded-full"
                      />
                      <div className="ml-4 text-center mt-2 small:mt-0 small:text-start">
                        <h1 className="text-xl font-[700] capitalize">
                          {singleoffering?.name}
                        </h1>
                        <h2 className="mb-0">
                          {singleoffering?.shortDescription}
                        </h2>

                        <h2 className="mb-0">
                          <span className="text-[#3ab67b] text-lg">
                            PKR {singleoffering?.target}
                          </span>{" "}
                          Required
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div
                      style={{
                        boxShadow:
                          "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
                      }}
                      className={
                        "relative mt-[200px] medium:absolute medium:top-[78%] medium:right-[50px] medium:mt-0 bg-white w-[285px] pt-[45px] pb-[20px] px-[16px] rounded-md "
                      }
                    >
                      <div className="h-[120px] w-[120px]  bg-[#EDEEF0] rounded-full flex items-center justify-center absolute -top-[81px] left-[75px]">
                        <div className="h-[90px] w-[90px] rounded-full bg-white flex items-center justify-center flex-col">
                          <span className="text-[#3ab67b] text-lg text-center font-bold">
                            Rs. {singleoffering?.target}
                          </span>
                          Required
                        </div>
                      </div>
                      <button
                        onClick={() => CheckoutbtnRef.current.click()}
                        className={`${
                          investbtn ? "hidden" : "block"
                        } bg-[#636667] text-white font-bold w-[250px] h-[45px] rounded-md`}
                      >
                        {session.user.userId ? (
                          "Donate"
                        ) : (
                          <Link
                            to={"/auth/signin"}
                            className="text-white hover:text-white"
                          >
                            Sign in to learn more
                          </Link>
                        )}
                      </button>
                      <div className="hidden">
                        <StripeCheckout
                          name="Care & Share Payment Service"
                          image="/assets/chainraise_logo_black_text.jpeg"
                          billingAddress
                          shippingAddress
                          description={`Your Total is Rs. ${singleoffering?.target}`}
                          amount={singleoffering?.target}
                          token={onToken}
                          stripeKey={stripeKey}
                          className="cursor-pointer hidden"
                        >
                          <Button color="primary" ref={CheckoutbtnRef}>
                            Pay Amount
                          </Button>
                        </StripeCheckout>
                      </div>
                      <div
                        className={`${
                          investbtn ? "block" : "hidden"
                        } submit-amount `}
                      >
                        <div class="relative z-0 mb-2 w-full group">
                          <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Enter Amount (USD)
                          </label>
                          <p className="text-center mb-0">
                            minimum{" "}
                            <span className="font-bold text-[#3ab67b] ">
                              ${singleoffering.minimumInvestment}
                            </span>
                          </p>
                        </div>
                        <Link
                          className="text-white cursor-pointer"
                          to={`/offerings/${singleoffering._id}/invest`}
                        >
                          <button className="bg-[#636667] text-white font-bold w-[250px] h-[45px] rounded-md">
                            Submit
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[400px] medium:pt-[150px] small:px-20 px-10 pb-10">
                <Tabs
                  defaultActiveKey="1"
                  type="card"
                  size={"large"}
                  tabBarGutter={10}
                >
                  {/* TAB 1 */}
                  <Tabs.TabPane key={"Donation Deatils"} tab="Description">
                    <p className="uppercase">{singleoffering?.description}</p>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleOffering2;
