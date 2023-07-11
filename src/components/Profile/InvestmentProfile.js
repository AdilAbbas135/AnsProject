import { Checkbox, Select } from "antd";
import React from "react";

const InvestmentProfile = () => {
  const { Option } = Select;
  return (
    <div
      style={{
        boxShadow:
          "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
      }}
      className=" bg-white rounded-xl  pt-10 shadow sm:mx-6 lg:mx-auto lg:max-w-6xl"
    >
      <h3 className="text-3xl font-[300] leading-6 text-text-color px-10">
        Investment Profile
      </h3>

      <form
        // onSubmit={handleSubmit(onSubmit)}
        action="#"
        method="POST"
      >
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-10 md:col-span-3 md:mt-0">
              <div className="overflow-hidden sm:rounded-md">
                <div className=" py-5 px-10">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Net Worth
                      </label>

                      {/* we will add on change function in this in future to update data  */}
                      <Select
                        size="large"
                        defaultValue="Select"
                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <Option value="$100,000">less than $100,000</Option>
                        <Option value="$100,000">$100,001 - $250,000</Option>
                        <Option value="$100,000">$250,001 - $500,000</Option>
                      </Select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="middle-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Annual Net Income
                      </label>
                      <input
                        type="text"
                        id="middle-name"
                        autoComplete="middle-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Highest Education
                      </label>

                      {/* we will add on change function in this in future to update data  */}
                      <Select
                        size="large"
                        defaultValue="Select"
                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <Option value="$100,000">less than High School</Option>
                        <Option value="$100,000">High School Graduate</Option>
                        <Option value="$100,000">Some College</Option>
                        <Option value="$100,000">Associate Degree</Option>
                        <Option value="$100,000">Bachelor's Degree</Option>
                        <Option value="$100,000">Master Degree</Option>
                        <Option value="$100,000">Doctorate</Option>
                        <Option value="$100,000">Not Set</Option>
                      </Select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Risk Tolerance
                      </label>
                      {/* <input
                      required
                      type="text"
                      {...register('phone')}
                      id="phone-number"
                      autoComplete="telephone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    /> */}

                      {/* we will add on change function in this in future to update data  */}
                      <Select
                        size="large"
                        defaultValue="Select"
                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <Option value="$100,000">Conservative</Option>
                        <Option value="$100,000">Moderate</Option>
                        <Option value="$100,000">Aggressive</Option>
                        <Option value="$100,000">Not Set</Option>
                      </Select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Investment Experience
                      </label>

                      {/* we will add on change function in this in future to update data  */}
                      <Select
                        size="large"
                        defaultValue="Select"
                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <Option value="$100,000">None</Option>
                        <Option value="$100,000">Limited</Option>
                        <Option value="$100,000">Good</Option>
                        <Option value="$100,000">Extensive</Option>
                        <Option value="$100,000">Not Set</Option>
                      </Select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Age
                      </label>

                      {/* we will add on change function in this in future to update data  */}
                      <Select
                        size="large"
                        defaultValue="Select"
                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <Option value="$100,000">Under 30</Option>
                        <Option value="$100,000">31-39</Option>
                        <Option value="$100,000">40-49</Option>
                        <Option value="$100,000">50-59</Option>
                        <Option value="$100,000">60-69</Option>
                        <Option value="$100,000">70-79</Option>
                        <Option value="$100,000">Over 79</Option>
                        <Option value="$100,000">(Not Set)</Option>
                      </Select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gender
                      </label>
                      {/* <input
                      required
                      type="text"
                      {...register('phone')}
                      id="phone-number"
                      autoComplete="telephone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    /> */}
                      {/* we will add on change function in this in future to update data  */}
                      <Select
                        size="large"
                        defaultValue="Select"
                        className=" mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <Option value="$100,000">Male</Option>
                        <Option value="$100,000">Female</Option>
                        <Option value="$100,000">Other</Option>
                        <Option value="$100,000">(Not Set)</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="mt-7 electronic-delivery-checkbox p-3 m-auto rounded-md w-max border-2 border-gray-300">
                    <Checkbox
                    // onChange={onChangeDeliveryCheckBox}
                    >
                      I agree to the Consent to Electronic Delivery
                    </Checkbox>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right rounded-xl sm:px-6">
                <button
                  // disabled={DeliveryCheck ? false : true}
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InvestmentProfile;
