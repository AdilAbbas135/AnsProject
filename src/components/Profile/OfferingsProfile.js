import { Modal, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "./offeringProfile.css";
import { AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const OfferingsProfile = () => {
  const navigate = useNavigate();
  let submitBtn = useRef();
  const session = useSelector((state) => state.session.session);
  const [allofferings, setallofferings] = useState([]);
  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [offeringdata, setofferingdata] = useState({
    offeringName: "",
    startDate: "",
    endDate: "",
    target: "",
    minInvestment: 0,
    maxInvestment: 0,
    ppUnit: 0,
    issueType: "",
    description: "",
    shortDescription: "",
    issuerId: session.user.userId,
  });
  const [featuredImage, setfeaturedImage] = useState();
  const [logoImg, setlogoImg] = useState();
  const [bannerImg, setbannerImg] = useState();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    submitBtn.click();
  };

  const AddOffering = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("featuredImage", featuredImage);
    data.append("logoImage", logoImg);
    data.append("bannerImage", bannerImg);
    data.append("offeringName", offeringdata.offeringName);
    data.append("startDate", offeringdata.startDate);
    data.append("endDate", offeringdata.endDate);
    data.append("target", offeringdata.target);
    data.append("minInvestment", offeringdata.minInvestment);
    data.append("maxInvestment", offeringdata.maxInvestment);
    data.append("ppUnit", offeringdata.ppUnit);
    data.append("issueType", offeringdata.issueType);
    data.append("description", offeringdata.description);
    data.append("shortDescription", offeringdata.shortDescription);
    data.append("issuerId", offeringdata.issuerId);

    axios
      .post("http://localhost:5000/api/offerings/addoffering", data)
      .then((result) => {
        setOpen(false);
        setConfirmLoading(false);
        fetchallOfferings();
      })
      .catch((err) => {
        setConfirmLoading(false);
      });
  };
  const fetchallOfferings = () => {
    setloading(true);
    axios
      .post(
        `http://localhost:5000/api/offerings/getofferings/${session.user.userId}`
      )
      .then((result) => {
        console.log(result);
        setallofferings(result.data.offerings);
        setloading(false);
      })
      .catch((err) => console.log(err));
  };

  const deleteOffering = async (id) => {
    console.log(id);
    await toast.promise(
      axios
        .post("http://localhost:5000/api/offerings/deleteoffering", { id })
        .then((result) => {
          fetchallOfferings();
        })
        .catch((err) => {}),
      {
        pending: "Deleting Offering Please Wait",
        success: "Offering Deleted Successfully",
        error: "Error in Deleting offering! Try Again",
      },
      { autoClose: 3000, closeOnClick: true, pauseOnHover: false }
    );
  };
  useEffect(() => {
    fetchallOfferings();
  }, []);

  return (
    <div className="oofering-container">
      {loading ? (
        <div className="h-[30vh] flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading your Charities</h2>
        </div>
      ) : (
        <div
          // style={{
          //   boxShadow:
          //     "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
          // }}
          className="w-full rounded-lg border bg-white px-5 py-5 shadow-sm"
        >
          <div className="flex p-4 justify-between">
            <div className="w-3/5">
              <h1 className="font-large text-lg font-bold text-black">
                Charities
              </h1>
              <p>All the Charities request added by you shows here</p>
            </div>

            <div className="w-1/5 p-4 flex justify-end">
              <button
                onClick={showModal}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Charity
              </button>
              <Modal
                title="Add Charity"
                open={open}
                onOk={handleOk}
                onCancel={() => setOpen(false)}
                confirmLoading={confirmLoading}
                width={900}
                style={{ top: 20 }}
                okText="Add Charity"
              >
                <div>
                  <form onSubmit={(e) => AddOffering(e)}>
                    <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                      <dl className="space-y-2 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        <div>
                          <label>Charity Name</label>
                          <input
                            required
                            type="text"
                            name="offering-name"
                            value={offeringdata.offeringName}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                offeringName: e.target.value,
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          />
                        </div>
                        <div>
                          <label>Start Date</label>
                          <input
                            required
                            type="date"
                            // value={offeringdata.startDate}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                startDate: new Date(e.target.value),
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          />
                        </div>
                        <div>
                          <label>End Date</label>
                          <input
                            required
                            type="date"
                            // value={offeringdata.endDate}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                endDate: new Date(e.target.value),
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          />
                        </div>
                        <div>
                          <label>Target Raise</label>
                          <input
                            required
                            type="number"
                            value={offeringdata.target}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                target: e.target.value,
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          />
                        </div>
                        <div>
                          <label>Minimum Investment</label>
                          <input
                            required
                            type="number"
                            value={offeringdata.minInvestment}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                minInvestment: e.target.value,
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          />
                        </div>
                        <div>
                          <label>Maximum Investment</label>
                          <input
                            required
                            type="number"
                            value={offeringdata.maxInvestment}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                maxInvestment: e.target.value,
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          />
                        </div>
                        <div>
                          <label>Price Per Unit</label>
                          <input
                            required
                            type="number"
                            value={offeringdata.ppUnit}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                ppUnit: e.target.value,
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          />
                        </div>
                        <div>
                          <label>Issue Type</label>
                          <input
                            required
                            type="text"
                            value={offeringdata.issueType}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                issueType: e.target.value,
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          />
                        </div>
                        <div className="col-span-2">
                          <label>Description</label>
                          <textarea
                            required
                            value={offeringdata.description}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                description: e.target.value,
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          ></textarea>
                        </div>
                        <div>
                          <label>Short Description</label>
                          <textarea
                            value={offeringdata.shortDescription}
                            onChange={(e) => {
                              setofferingdata({
                                ...offeringdata,
                                shortDescription: e.target.value,
                              });
                            }}
                            className="mt-1 mb-1 w-full  rounded p-2"
                          ></textarea>
                        </div>

                        <div>
                          <label>Featured Image</label>
                          <input
                            required
                            type="file"
                            name="myfile"
                            accept="image/*"
                            onChange={(e) =>
                              setfeaturedImage(e.target.files[0])
                            }
                          />
                        </div>
                        <div>
                          <label>Logo</label>
                          <input
                            required
                            type="file"
                            name="myfile"
                            accept="image/*"
                            onChange={(e) => setlogoImg(e.target.files[0])}
                          />
                        </div>
                        <div>
                          <label>Banner Image</label>
                          <input
                            required
                            type="file"
                            name="myfile"
                            accept="image/*"
                            onChange={(e) => setbannerImg(e.target.files[0])}
                          />
                        </div>
                      </dl>
                    </div>
                    <div className="hidden bg-gray-200 px-4 py-3 text-right">
                      {/* <button
                      type="button"
                      className="mr-2 rounded bg-gray-500 py-2 px-4 text-white hover:bg-gray-700"
                      //   onClick={() => toggleModal(false)}
                    >
                      <i className="fas fa-times"></i> Cancel
                    </button> */}
                      <button
                        ref={(elem) => (submitBtn = elem)}
                        type="submit"
                        className="hidden mr-2 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-700"
                      >
                        <i className="fas fa-plus"></i> Create
                      </button>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
          </div>
          {allofferings.length > 0 ? (
            <div className="p-2">
              <table className="min-w-full rounded border">
                <thead>
                  <tr>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      S#
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Name
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Goal
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Max Raise
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Status
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allofferings.map((offering, index) => (
                    <tr className="border-b" key={index}>
                      <td className="py-3 px-5">
                        <div className="flex">
                          <div className="pl-2 pt-1">{index + 1}</div>
                        </div>
                      </td>
                      <td className="py-3 px-5">{offering?.name}</td>
                      <td className="py-3 px-5">{offering?.target}</td>
                      <td className="py-3 px-5">{offering.maxInvestment}</td>

                      <td className="py-3 px-5">Active</td>

                      <td className="py-3 px-5 flex">
                        {/* eslint-disable-next-line */}
                        <a
                          onClick={() => {
                            window.scrollTo({ top: 0 });
                            navigate(`/offerings/${offering?.name}`, {
                              state: offering,
                            });
                          }}
                          className="edit-btn p-2 rounded-lg bg-[#fff8dd] hover:bg-[#ffc700]"
                        >
                          <AiFillEye
                            size={20}
                            className="text-[#ffc700] edit-icon"
                          />
                        </a>
                        {/* eslint-disable-next-line */}
                        <a
                          onClick={() => deleteOffering(offering._id)}
                          className={`delete-btn ml-2 bg-[#fff5f8] p-2 rounded-lg hover:bg-[#f1416c]`}
                        >
                          <MdDelete
                            size={20}
                            className="delete-icon text-[#f1416c]"
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h1>No Charities to Show</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default OfferingsProfile;
