import { Checkbox, DatePicker, Spin } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";

const AccountInfoTab = ({ UserInfo, setUserInfo }) => {
  const [DeliveryCheck, setDeliveryCheck] = useState(false);
  const [loading, setloading] = useState(false);

  const onchangedob = (date, dateString) => {
    // console.log(dateString);
    setUserInfo({ ...UserInfo, dob: new Date(dateString) });
  };
  const onChangeDeliveryCheckBox = (e) => {
    setDeliveryCheck(e.target.checked);
  };
  const handleSubmitAccount = async () => {
    setloading(true);
    await toast.promise(
      axios
        .post("http://localhost:5000/api/login/google/updateuser", UserInfo)
        .then((result) => {
          setloading(false);
        })
        .catch((err) => {
          setloading(false);
        }),
      {
        pending: "Updating! Please Wait",
        success: "Profile Updated Successfully",
        error: "Error in Udating Account",
      }
    );
  };

  return (
    <>
      <ToastContainer />
      <div className="mx-4 rounded-md sm:mx-6 lg:mx-auto lg:max-w-6xl">
        <div className="flex">
          <div className="w-full">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              CONTACT INFORMATION
            </h3>
            <p className="mt-1 w-full text-sm text-gray-500">
              ChainRaise has implemented this verification step to stay legally
              compliant with KYC/AML (Know Your Customer/Anti-Money Laundering)
              regulations. This is an additional measure to ensure against
              accepting fraudulent contributions. All investors must complete
              the KYC/AML form before making any investments through ChainRaise.
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitAccount();
          }}
        >
          <div
            className="mt-10 sm:mt-0 rounded-lg"
            style={{
              boxShadow:
                "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
            }}
          >
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="mt-10 md:col-span-3 md:mt-0">
                <div className="overflow-hidden sm:rounded-md">
                  <div className="bg-white py-10 px-10 ">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          value={UserInfo.firstName}
                          onChange={(e) => {
                            setUserInfo({
                              ...UserInfo,
                              firstName: e.target.value,
                            });
                            // console.log(UserInfo);
                          }}
                          required
                          type="text"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="middle-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Middle Name
                        </label>
                        <input
                          type="text"
                          id="middle-name"
                          value={UserInfo.middleName}
                          onChange={(e) => {
                            setUserInfo({
                              ...UserInfo,
                              middleName: e.target.value,
                            });
                            // console.log(UserInfo);
                          }}
                          autoComplete="middle-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          value={UserInfo.lastName}
                          onChange={(e) =>
                            setUserInfo({
                              ...UserInfo,
                              lastName: e.target.value,
                            })
                          }
                          autoComplete="family-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="Title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <input
                          required
                          type="text"
                          id="Title"
                          value={UserInfo.title}
                          onChange={(e) =>
                            setUserInfo({
                              ...UserInfo,
                              title: e.target.value,
                            })
                          }
                          autoComplete="Title"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="phone-number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          required
                          type="tel"
                          id="phone-number"
                          value={UserInfo?.phone}
                          onChange={(e) =>
                            setUserInfo({
                              ...UserInfo,
                              phone: e.target.value,
                            })
                          }
                          autoComplete="telephone"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="date-of-birth"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Date Of Birth
                        </label>
                        <DatePicker
                          onChange={onchangedob}
                          allowClear
                          id="date-of-birth"
                          size="large"
                          className=" block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="mt-10 mb-5">
                      <h3 className="text-xl font-medium leading-6 text-gray-900">
                        Address
                      </h3>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Street Address
                        </label>
                        <input
                          required
                          type="text"
                          id="street-address"
                          value={UserInfo.address1}
                          onChange={(e) =>
                            setUserInfo({
                              ...UserInfo,
                              address1: e.target.value,
                            })
                          }
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="suit/unit"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Suit/Unit
                        </label>
                        <input
                          type="text"
                          id="suit/unit"
                          value={UserInfo.suit_unit}
                          onChange={(e) =>
                            setUserInfo({
                              ...UserInfo,
                              suit_unit: e.target.value,
                            })
                          }
                          autoComplete="suit/unit"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          value={UserInfo.city}
                          onChange={(e) =>
                            setUserInfo({
                              ...UserInfo,
                              city: e.target.value,
                            })
                          }
                          autoComplete="city"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State/Region
                        </label>
                        <input
                          required
                          type="text"
                          id="state"
                          value={UserInfo.state}
                          onChange={(e) =>
                            setUserInfo({
                              ...UserInfo,
                              state: e.target.value,
                            })
                          }
                          autoComplete="state"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          required
                          type="text"
                          id="postal-code"
                          value={UserInfo.zip_code}
                          onChange={(e) =>
                            setUserInfo({
                              ...UserInfo,
                              zip_code: e.target.value,
                            })
                          }
                          autoComplete="postal-code"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="my-7 electronic-delivery-checkbox p-3 m-auto rounded-md w-max border-2 border-gray-300">
                      <Checkbox onChange={onChangeDeliveryCheckBox}>
                        I agree to the Consent to Electronic Delivery
                      </Checkbox>
                    </div>

                    <div className="mt-10 mb-5">
                      <h3 className="text-xl font-medium leading-6 text-gray-900">
                        IDENTITY VERIFICATION
                      </h3>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="ssn"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Social Security # (US investors only)
                        </label>
                        <input
                          required
                          type="text"
                          id="ssn"
                          autoComplete="ssn"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3"></div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="Nationality"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nationality
                        </label>
                        <input
                          required
                          type="text"
                          id="Nationality"
                          autoComplete="Nationality"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="Nationality"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country Of Residence
                        </label>
                        <input
                          required
                          type="text"
                          id="Nationality"
                          autoComplete="Nationality"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="Nationality"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Identification Type
                        </label>
                        <input
                          required
                          type="text"
                          id="Nationality"
                          autoComplete="Nationality"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-full m-auto">
                      <div className="mt-16 w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg
                              aria-hidden="true"
                              className="mb-3 w-10 h-10 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              ></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden col-span-1"
                            accept=".jpg, .jpeg, .png"
                            // onClick={(e) => {
                            //   console.log(File);
                            // }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 rounded-lg">
                  <button
                    disabled={DeliveryCheck && !loading ? false : true}
                    type="submit"
                    className=" inline-flex justify-center items-center rounded-md border border-transparent bg-indigo-600 h-10 w-24 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Spin
                        indicator={
                          <LoadingOutlined
                            className="text-white"
                            style={{ fontSize: 20, color: "white" }}
                            spin
                          />
                        }
                      />
                    ) : (
                      "Update"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountInfoTab;
