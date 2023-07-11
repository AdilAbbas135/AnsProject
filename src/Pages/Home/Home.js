import { Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../components/navigation/Footer/Footer";
import Header from "../../components/navigation/Header";
import { LoadingOutlined } from "@ant-design/icons";
import { FiChevronRight } from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate();
  const [allofferings, setallofferings] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    document.title = "Care & Share | Home";
    axios
      .get("http://localhost:5000/api/offerings")
      .then((result) => {
        console.log(result?.data?.offerings);
        setallofferings(result?.data?.offerings);
        setloading(false);
      })
      .catch((err) => {
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
  }, []);

  const perks = [
    {
      name: "Access exclusive opportunities",
      imageUrl:
        "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
      description:
        "Gain access to never before seen offerings available only on this platform",
    },
    {
      name: "Done-for-you Due Diligence",
      imageUrl:
        "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
      description:
        "Our offerings are reviewed and checked for compliance with all pertinent regulatory bodies",
    },
    {
      name: "Support Your Passions",
      imageUrl:
        "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
      description: "Invest in the things you care about, and turn a profit too",
    },
  ];
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="mx-auto flex max-w-7xl flex-col border-b border-gray-200 lg:border-0">
          <div className="relative">
            {/* <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
            /> */}
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:grid lg:grid-cols-1">
                {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2"> */}
                <div className="mx-auto pt-24 pb-12 lg:max-w-none">
                  <div className="px-2">
                    <div className="flex w-full justify-center">
                      <Link to={"/raise-funds"}>
                        {/* eslint-disable-next-line */}
                        <a className="mx-auto inline-flex items-center rounded-full border border-gray-700 bg-transparent p-1 pr-2 sm:text-base lg:text-sm xl:text-base">
                          <span className="rounded-full bg-cr-primary px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
                            Need funds?
                          </span>
                          <span className="ml-4 text-sm text-stone-900">
                            Start your own Care & Share!
                          </span>
                          <FiChevronRight
                            className="ml-2 h-5 w-5 text-cr-primary font-bold"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </div>

                    <h1 className="my-4 text-center text-4xl tracking-tight sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                      <span className="font-bold text-cr-primary">
                        Your Generosity can save
                      </span>{" "}
                      <span className="bg-gradient-to-r from-cr-secondary to-cr-primary bg-clip-text pb-3 font-extrabold text-transparent">
                        lives
                      </span>
                    </h1>
                    <p className="mt-3 text-center text-base text-stone-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Join Care & Share now to get started investing in
                      start-ups and small businesses doing things you care
                      about.
                    </p>
                  </div>
                </div>
              </div>
              {/* 
              <div className="h-48 p-2 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGl2ZXJzaXR5JTIwYnVzaW5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="hidden h-full rounded-md object-cover object-center"
                />
              </div> */}
            </div>
          </div>
        </div>

        <section aria-labelledby="trending-heading">
          <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8 lg:pt-16">
            <div className="md:flex md:items-center md:justify-between">
              <h2
                id="favorites-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Trending Raises
              </h2>
              <Link to={"/offerings"}>
                {/* eslint-disable-next-line */}
                <a className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                  View all raises<span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
            {loading ? (
              <div className=" flex items-center justify-center">
                <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />}
                />
                <h2 className="ml-5">Loading Offerings....</h2>
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                {allofferings.length === 0 ? (
                  <h1>No Offerings to Show</h1>
                ) : (
                  allofferings.map((raise, index) => (
                    <div
                      key={index}
                      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                    >
                      <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                        <img
                          src={
                            raise.featuredImage
                              ? raise.featuredImage
                              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aGhqQ0QRQUcv7lHtXn4xLzFt9pzo7L_duQ&usqp=CAU"
                          }
                          alt=""
                          className="h-full w-full object-cover  sm:h-full sm:w-full"
                        />
                      </div>
                      <div className="flex flex-1 flex-col space-y-2 p-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          {/* eslint-disable-next-line */}
                          <a
                            // href={"/offerings/" + raise.name}
                            onClick={() => {
                              window.scrollTo({ top: 0 });
                              navigate(`/offerings/${raise?.name}`, {
                                state: raise,
                              });
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {raise.name}
                          </a>
                        </h3>
                        <p className="text-sm text-gray-500">
                          {raise.shortDescription.substring(1, 50)}...
                        </p>
                        <div className="flex flex-1 flex-col justify-end">
                          <p className="text-sm italic text-gray-500">
                            {raise.issueType}
                          </p>
                          <p className="text-base font-medium text-gray-900">
                            $ {raise.target}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            <div className="mt-8 text-sm md:hidden">
              {/* eslint-disable-next-line */}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                View all raises<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="perks-heading"
          className="border-t border-gray-200 bg-gray-50"
        >
          <h2 id="perks-heading" className="sr-only">
            Our perks
          </h2>

          <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 mx-auto h-24 w-auto"
                        src={perk.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-stone-900">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
