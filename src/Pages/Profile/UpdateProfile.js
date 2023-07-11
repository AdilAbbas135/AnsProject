import Header from "../../components/navigation/Header";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spin, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import OfferingsProfile from "../../components/Profile/OfferingsProfile";
import { clearSession } from "../../Redux/SessionRedux";
import { FetchProfile } from "../../Redux/DashboardData";
import millify from "millify";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const session = useSelector((state) => state.session.session);
  const dashboard = useSelector((state) => state.DashboardData);
  const error = useSelector((state) => state.DashboardData.error);
  useEffect(() => {
    dispatch(FetchProfile());

    //eslint-disable-next-line
  }, [dispatch]);
  if (error) {
    dispatch(clearSession());
    navigate("/auth/signin", {
      state: { PageError: true, error: dashboard?.errorMessage },
    });
  }

  // const UploadProfilePic = () => {
  //   console.log(imageref);
  //   imageref.click();
  // };

  return (
    <>
      {dashboard.loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading....</h2>
        </div>
      ) : (
        <div className="min-h-full">
          {/* {console.log(UserInfo)} */}
          <Header />
          <div className="flex flex-1 flex-col bg-main-bg-color">
            <main className="flex-1 pb-8">
              <div>
                <div className=" sm:px-6 lg:mx-auto lg:max-w-6xl">
                  <div
                    style={{
                      boxShadow:
                        "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
                    }}
                    className="py-6 px-6 my-10 rounded-md md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200 bg-white "
                  >
                    <div className="min-w-0 flex-1">
                      {/* Profile */}
                      <div className="flex items-center ">
                        <div>
                          <div className="flex items-center">
                            <div
                              // onClick={UploadProfilePic}
                              className="h-20 w-20 rounded-full cursor-pointer shadow-xl flex items-center flex-col justify-center"
                            >
                              {/* {session?.user?.image ? (
                                <>
                                  <Tooltip title="Change Picture">
                                    <img
                                      className="rounded-full"
                                      src={session?.user?.image}
                                      alt=" "
                                    />
                                    <input
                                      type={"file"}
                                      ref={(elem) => (imageref = elem)}
                                      className="hidden"
                                      accept=".jpg, .jpeg, .png"
                                    />
                                  </Tooltip>
                                </>
                              ) : (
                                <div>
                                  <FiCamera size={25} />
                                  <span className="font-semibold">Upload</span>
                                  <input
                                    type={"file"}
                                    ref={(elem) => (imageref = elem)}
                                    className="hidden"
                                    accept=".jpg, .jpeg, .png"
                                  />
                                </div>
                              )} */}
                              <img src="/assets/icons8-user-96.png" alt="" />
                            </div>
                            <div className="ml-5">
                              <h1 className=" text-lg font-sans font-bold  text-text-color mb-0 ">
                                {/* {profile?.firstName + " " + profile?.lastName} */}{" "}
                                {dashboard?.Details?.Email}
                              </h1>
                              {/* <div className="bg-cr-secondary mt-2 w-max px-3 rounded-3xl text-white">
                                issuer
                              </div> */}
                            </div>
                          </div>
                          {/* <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                            <dt className="sr-only">Account status</dt>
                            <dd className="mt-10 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                              <CheckCircleIcon
                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                aria-hidden="true"
                              />
                              Verified account
                            </dd>
                          </dl> */}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                      {/* <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                      >
                        Update Profile Information
                      </button>
                      <Link href="/profile">
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                        >
                          View Account Summary
                        </button>
                      </Link> */}
                      {/* <div>
                        <h1 className="font-bold text-xl mb-0 text-center">
                          0
                        </h1>
                        <h1 className="font-[400]">Total Investments</h1>
                      </div> */}
                      <div className="px-5">
                        <h1 className="font-bold text-xl mb-0 text-center">
                          Rs. {millify(dashboard?.totatDonations)}
                        </h1>
                        <h1 className="font-[400]">Total Funds Donated</h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-xl mb-0 text-center">
                          Rs. {millify(dashboard?.totalRecieved)}
                        </h1>
                        <h1 className="font-[400]">Total Funds Recieved</h1>
                      </div>
                    </div>
                  </div>

                  <Tabs
                    defaultActiveKey="1"
                    type="line"
                    size={"large"}
                    tabBarGutter={30}
                  >
                    {/* TAB 1 */}
                    {/* <Tabs.TabPane key={"Account"} tab="Account">
                      <AccountInfoTab
                      // UserInfo={UserInfo}
                      // setUserInfo={setUserInfo}
                      />
                    </Tabs.TabPane> */}

                    {/* TAB 2 */}
                    {/* <Tabs.TabPane key={"Profile"} tab="Profile">
                      <InvestmentProfile />
                    </Tabs.TabPane> */}

                    {/* TAB 3 */}
                    {/* <Tabs.TabPane key={"Accreditation"} tab="Accreditation">
                      <div className="max-w-5xl">
                        <Radio.Group
                          buttonStyle="outline"
                          defaultValue="a"
                          className="w-full flex flex-wrap space-x-5 space-y-5"
                        >
                          <div></div>
                          <Radio.Button
                            value="a"
                            style={{ height: "fit-content" }}
                          >
                            <div className="h-[250px] w-[200px] flex flex-col justify-center items-center p-4">
                              <UserIcon className="text-black  h-12 w-12" />
                              <h2 className="text-sm text-center">
                                My Individual Income is
                              </h2>
                              <h1 className="font-bold text-xl text-center py-2">
                                Above $200,000
                              </h1>
                              <p className="text-black text-center">
                                (for each of the last 2 years)
                              </p>
                            </div>
                          </Radio.Button>

                          <Radio.Button
                            value="b"
                            style={{ height: "fit-content" }}
                          >
                            <div className="h-[250px] w-[200px] flex flex-col justify-center items-center p-4">
                              <UserIcon className="text-black  h-12 w-12" />
                              <h2 className="text-sm text-center">
                                My Joint Income with spouse is
                              </h2>
                              <h1 className="font-bold text-xl text-center py-2">
                                Above $300,000
                              </h1>
                              <p className="text-black text-center">
                                (for each of the last 2 years)
                              </p>
                            </div>
                          </Radio.Button>

                          <Radio.Button
                            value="c"
                            className="h-fit"
                            style={{ height: "fit-content" }}
                          >
                            <div className="h-[250px] flex flex-col justify-center items-center p-4 w-[200px]">
                              <UserIcon className="text-black  h-12 w-12" />
                              <h2 className="text-sm text-center">
                                My individual Net Worth or joint with spouse is
                              </h2>
                              <h1 className="font-bold text-xl text-center py-2">
                                Above $1M
                              </h1>
                              <p className="text-black text-center">
                                (excluding primary residence)
                              </p>
                            </div>
                          </Radio.Button>

                          <Radio.Button
                            value="d"
                            className="h-fit"
                            style={{ height: "fit-content" }}
                          >
                            <div className="h-[250px] flex flex-col justify-center items-center p-4 w-[200px]">
                              <UserIcon className="text-black  h-12 w-12" />
                              <h2 className="text-sm text-center">
                                I own Total Investments
                              </h2>
                              <h1 className="font-bold text-xl text-center py-2">
                                Above $5M
                              </h1>
                              <p className="text-black text-center">
                                (including jointly with spouse)
                              </p>
                            </div>
                          </Radio.Button>

                          <Radio.Button
                            value="e"
                            className="h-fit"
                            style={{ height: "fit-content" }}
                          >
                            <div className="h-[250px] flex flex-col justify-center items-center p-4 w-[200px]">
                              <UserIcon className="text-black  h-12 w-12" />
                              <h2 className="text-sm text-center font-semibold">
                                I am a licensed individual that holds an active
                                Series 7, Series 65, or Series 82 registration
                              </h2>
                            </div>
                          </Radio.Button>

                          <Radio.Button
                            value="f"
                            className="h-fit"
                            style={{ height: "fit-content" }}
                          >
                            <div className="h-[250px] flex flex-col justify-center items-center p-4 w-[200px]">
                              <UserIcon className="text-black  h-12 w-12" />
                              <h2 className="text-sm text-center font-semibold">
                                I am not an investor
                              </h2>
                            </div>
                          </Radio.Button>
                        </Radio.Group>
                      </div>
                    </Tabs.TabPane> */}

                    {/* TAB 4 */}
                    {/* <Tabs.TabPane key={"Users"} tab="Users">
                      <div className="mt-10 w-full ">
                        <div className=" rounded-md border bg-white ">
                          <div className="flex p-4">
                            <div className="w-3/5">
                              <h1 className="font-large mt-4  pl-4 text-lg font-bold text-black">
                                Team Members
                              </h1>
                              <p className="pl-4">
                                A list of all users that represent your
                                organization including their name, email and
                                role
                              </p>
                            </div>
                            <div className="w-1/5 p-4">
                              <input
                                type="text"
                                id="search"
                                placeholder="Search"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="w-1/5 p-4 ">
                              <button
                                
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Add Member
                              </button>
                            </div>
                          </div>
                          <div className="p-2">
                            <table className="min-w-full rounded border">
                              <thead>
                                <tr>
                                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                    Username
                                  </th>
                                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                    First Name
                                  </th>
                                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                    Last Name
                                  </th>
                                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                    Phone
                                  </th>
                                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                    Is Active
                                  </th>
                                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                    Is Primary
                                  </th>
                                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                    Email Verified
                                  </th>
                                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                    Notifications
                                  </th>
                                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                    Details / Edit
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {members.map((member) => (
                                  <tr>
                                    <td className="p-5">
                                      <div className="flex">
                                        
                                        <div className="pl-2 pt-1">
                                          {member.username}
                                        </div>
                                      </div>
                                    </td>
                                    <td className="p-5">{member.firstName}</td>
                                    <td className="p-5">{member.lastName}</td>
                                    <td className="p-5">
                                    
                                      <a
                                        href="/"
                                        className="text-bold text-blue-900"
                                      >
                                        Edit
                                      </a>
                                      
                                    </td>

                                    <td className="p-5">
                                      <Checkbox defaultChecked disabled />
                                    </td>
                                    <td className="p-5">
                                      <Checkbox
                                        defaultChecked={false}
                                        disabled
                                      />
                                    </td>

                                    <td className="p-5">
                                      <Checkbox defaultChecked disabled />
                                    </td>
                                    <td className="p-5">
                                      
                                      <a
                                        href="/"
                                        className="text-bold text-blue-900"
                                      >
                                        Manage
                                      </a>
                                     
                                    </td>
                                    <td className="p-5">
                                      <a href="/">
                                        <AiFillEdit size={25} />
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </Tabs.TabPane> */}

                    {/* TAB 5 */}
                    {/* <Tabs.TabPane key={"Payment-Method"} tab="Payment Method">
                      <h1>No Payment Method Found</h1>
                    </Tabs.TabPane> */}

                    <Tabs.TabPane key={"Offerings"} tab="Offerings">
                      <OfferingsProfile />
                    </Tabs.TabPane>
                  </Tabs>
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProfile;
