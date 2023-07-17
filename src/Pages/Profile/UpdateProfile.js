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
                              <img src="/assets/icons8-user-96.png" alt="" />
                            </div>
                            <div className="ml-5">
                              <h1 className=" text-lg font-sans font-bold  text-text-color mb-0 ">
                                {/* {profile?.firstName + " " + profile?.lastName} */}{" "}
                                {dashboard?.Details?.Email}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                      <div className="px-5">
                        <h1 className="font-bold text-xl mb-0 text-center">
                          Rs. {millify(dashboard?.totatDonations)}
                        </h1>
                        <h1 className="font-[400] text-[1em]">
                          Total Funds Donated
                        </h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-xl mb-0 text-center">
                          Rs. {millify(dashboard?.totalRecieved)}
                        </h1>
                        <h1 className="font-[400] text-[1em]">
                          Total Funds Recieved
                        </h1>
                      </div>
                    </div>
                  </div>

                  <Tabs
                    defaultActiveKey="1"
                    type="line"
                    size={"large"}
                    tabBarGutter={30}
                  >
                    <Tabs.TabPane key={"Charity"} tab="Charity">
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
