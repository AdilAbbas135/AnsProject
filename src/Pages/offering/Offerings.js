import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { Collapse, Radio, Select, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import Header from "../../components/navigation/Header";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Offerings = () => {
  const navigate = useNavigate();
  const { Option } = Select;
  const { Panel } = Collapse;
  const [allofferings, setallofferings] = useState([]);
  const [loading, setloading] = useState(true);

  const subCategories = [
    { name: "Energy", href: "#" },
    { name: "Fintech & Finance", href: "#" },
    { name: "Media", href: "#" },
    { name: "Real Estate", href: "#" },
    { name: "Technology", href: "#" },
  ];

  const handlecategoryfetch = async (catname) => {
    //   if(catname==="Energy"){
    //     var data = await prisma.of.findMany({
    //       where: { organization: },
    //     })
    //     var stringifiedData = safeJsonStringify(offerings)
    //     offerings = JSON.parse(stringifiedData)
    //   }
  };

  const handleChangeSelect = (value) => {
    if (value === "MinimumLow") {
      // setallofferings(props.lowtoHigh);
    } else if (value === "MinimumHigh") {
      //setallofferings(props.HightoLow);
    } else if (value === "Ending Soon") {
      //setallofferings(props.EndingSoon);
    } else if (value === "Newest") {
      //setallofferings(props.Newest);
    }
  };

  const fetchOfferings = async () => {
    axios
      .get("http://localhost:5000/api/offerings")
      .then((result) => {
        // console.log(result?.data?.data);
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
  };
  useEffect(() => {
    fetchOfferings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <ToastContainer />
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading....</h2>
        </div>
      ) : (
        <div className="py-6">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <main className="lg:col-span-12">
              <h1 className="text-3xl font-semibold leading-6 text-gray-900">
                Alone we can do little bit together we can do so much
              </h1>

              <hr className="my-4" />
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                {allofferings.length === 0 ? (
                  <h1 className="text-xl text-blue-900">
                    No Offerings To Show
                  </h1>
                ) : (
                  allofferings.map((product) => (
                    <div
                      key={product.id}
                      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                    >
                      <div className="aspect-w-3 aspect-h-3 md:aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                        {/* eslint-disable-next-line */}
                        <img
                          src={
                            product.featuredImage
                              ? product.featuredImage
                              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aGhqQ0QRQUcv7lHtXn4xLzFt9pzo7L_duQ&usqp=CAU"
                          }
                          alt="offering-image"
                          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                        />
                      </div>
                      <div className="flex flex-1 flex-col space-y-2 p-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          {/* eslint-disable-next-line */}
                          <a
                            // href={"/offerings/" + product.slug}
                            onClick={() => {
                              window.scrollTo({ top: 0 });
                              navigate(`/offerings/${product?.name}`, {
                                state: product,
                              });
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="text-sm text-gray-500">
                          {product.shortDescription}
                        </p>
                        <div className="flex flex-1 flex-col justify-end">
                          <p className="text-sm italic text-gray-500">
                            {product.issueType}
                          </p>
                          <p className="text-base font-medium text-gray-900">
                            $ {product.target}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offerings;
