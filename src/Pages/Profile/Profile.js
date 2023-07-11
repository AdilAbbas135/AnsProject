import React, { useEffect } from "react";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import Footer from "../../components/navigation/Footer/Footer";
import Header from "../../components/navigation/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchProfile } from "../../Redux/DashboardData";
import { clearSession } from "../../Redux/SessionRedux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import millify from "millify";
import moment from "moment";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.session);
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
  const cards = [
    {
      name: "Total Donations Made",
      href: "#",
      icon: CurrencyDollarIcon,
      amount: millify(dashboard?.totatDonations),
    },
    {
      name: "Total Funds Recieve",
      href: "#",
      icon: UserGroupIcon,
      amount: millify(dashboard?.totalRecieved),
    },
  ];
  const transactions = [
    {
      id: 1,
      name: "Payment to Multivest",
      href: "#",
      amount: "$20,000",
      currency: "USD",
      status: "success",
      date: "July 11, 2022",
      datetime: "2022-07-11",
    },
    {
      id: 2,
      name: "Payment to Super Cool Business",
      href: "#",
      amount: "$10,000",
      currency: "USD",
      status: "success",
      date: "July 23, 2022",
      datetime: "2022-07-23",
    },
    {
      id: 3,
      name: "Payment to ChainRaise",
      href: "#",
      amount: "$15,000",
      currency: "USD",
      status: "success",
      date: "July 30, 2022",
      datetime: "2022-07-30",
    },
  ];
  return (
    <>
      {dashboard.loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading....</h2>
        </div>
      ) : (
        <>
          <Header />
          <div className="min-h-full">
            <div className="flex flex-1 flex-col">
              <main className="flex-1 pb-8">
                {/* Page header */}
                <div className="bg-white shadow">
                  <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                    <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                      <div className="min-w-0 flex-1">
                        {/* Profile */}
                        <div className="flex items-center">
                          <div>
                            <div className="flex items-center">
                              <h1 className="ml-3 text-xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                                Welcome {dashboard?.Details?.Email}
                              </h1>
                            </div>
                            <dl className="group mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                              <dt className="sr-only">Account status</dt>
                              <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 group-hover:opacity-10 sm:mr-6 sm:mt-0">
                                <CheckCircleIcon
                                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                  aria-hidden="true"
                                />
                                Verified account
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                        <Link to="/profile/update">
                          <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          >
                            Update Profile Information
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  {/* <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="relative mt-1 rounded-md bg-cr-primary">
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                  <div className="pr-16 sm:px-16 sm:text-center">
                    <p className="font-medium text-white">
                      <span>Complete your investor sign up.</span>

                      <span className="block sm:ml-2 sm:inline-block">
                        <a href="#" className="font-bold text-white underline">
                          {' '}
                          Click here <span aria-hidden="true">&rarr;</span>
                        </a>
                      </span>
                    </p>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
                    <button
                      type="button"
                      className="flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="sr-only">Dismiss</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div> */}

                  <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-lg font-medium leading-6 text-gray-900">
                      Overview
                    </h2>
                    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Card */}
                      {cards.map((card) => (
                        <div
                          key={card.name}
                          className="rounded-lg bg-white shadow"
                        >
                          <div className="p-5">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <card.icon
                                  className="h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-5 w-0 flex-1">
                                <dl>
                                  <dt className="truncate text-sm font-medium text-gray-500">
                                    {card.name}
                                  </dt>
                                  <dd>
                                    <div className="text-lg font-medium text-gray-900">
                                      {card.amount}
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-5 py-3">
                            <div className="text-sm">
                              <a
                                href={card.href}
                                className="font-medium text-cyan-700 hover:text-cyan-900"
                              >
                                View all
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className="mx-auto mt-8 max-w-6xl px-4">
                    <OfferingsProfile />
                  </div> */}
                  <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
                    Recent activity
                  </h2>
                  <div className="shadow sm:hidden">
                    {/* eslint-disable-next-line */}
                    <ul
                      role="list"
                      className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
                    >
                      {dashboard?.PaymentHistory?.map((transaction) => (
                        <li key={transaction.id}>
                          <a
                            href={transaction.href}
                            className="block bg-white px-4 py-4 hover:bg-gray-50"
                          >
                            <span className="flex items-center space-x-4">
                              <span className="flex flex-1 space-x-2 truncate">
                                <BanknotesIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="flex flex-col truncate text-sm text-gray-500">
                                  <span className="truncate">
                                    {transaction?.userId ===
                                    session?.user?.profileId
                                      ? "Payment Made to"
                                      : "Payment Recieved From"}
                                  </span>
                                  <span>
                                    <span className="font-medium text-gray-900">
                                      {transaction?.StripeDetails?.amount}
                                    </span>{" "}
                                    {transaction?.StripeDetails?.currency}
                                  </span>
                                  <time dateTime={transaction.createdAt}>
                                    {transaction.createdAt}
                                  </time>
                                </span>
                              </span>
                              <ChevronRightIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>

                    <nav
                      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
                      aria-label="Pagination"
                    >
                      <div className="flex flex-1 justify-between">
                        {/*  eslint-disable-next-line */}
                        <a
                          href="/"
                          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                        >
                          Previous
                        </a>
                        {/* eslint-disable-next-line */}
                        <a
                          href="/"
                          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                        >
                          Next
                        </a>
                      </div>
                    </nav>
                  </div>

                  {/* Activity table (small breakpoint and up) */}
                  <div className="hidden sm:block">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                      <div className="mt-2 flex flex-col">
                        <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr>
                                <th
                                  className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                  scope="col"
                                >
                                  Transaction
                                </th>
                                <th
                                  className="bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                                  scope="col"
                                >
                                  Amount
                                </th>
                                <th
                                  className="hidden bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:block"
                                  scope="col"
                                >
                                  Status
                                </th>
                                <th
                                  className="bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                                  scope="col"
                                >
                                  Date
                                </th>
                                <th
                                  className="bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                                  scope="col"
                                >
                                  Reciept
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              {dashboard?.PaymentHistory.length > 0 ? (
                                dashboard?.PaymentHistory?.map(
                                  (transaction) => (
                                    <tr
                                      key={transaction.id}
                                      className="bg-white"
                                    >
                                      <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                        <div className="flex">
                                          <a
                                            href={transaction.href}
                                            className="group inline-flex space-x-2 truncate text-sm"
                                          >
                                            <BanknotesIcon
                                              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                              aria-hidden="true"
                                            />
                                            <p className="truncate text-gray-500 group-hover:text-gray-900">
                                              {transaction?.userId ===
                                              session?.user?.profileId
                                                ? "Payment Made"
                                                : "Payment Recieved"}
                                            </p>
                                          </a>
                                        </div>
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                                        <span className="font-medium text-gray-900">
                                          {transaction?.StripeDetails?.amount}
                                        </span>{" "}
                                        <span className="uppercase">
                                          {transaction?.StripeDetails?.currency}
                                        </span>
                                      </td>
                                      <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                                        <span
                                          className={
                                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"
                                          }
                                        >
                                          {transaction?.StripeDetails?.status}
                                        </span>
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                                        <time dateTime={transaction.createdAt}>
                                          {moment(transaction.createdAt).format(
                                            "DD-MM-YYYY HH:mm:ss"
                                          )}
                                        </time>
                                      </td>
                                      <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                                        <span
                                          className={
                                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"
                                          }
                                        >
                                          <a
                                            href={
                                              transaction?.StripeDetails
                                                ?.receipt_url
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className="font-semibold text-cr-primary"
                                          >
                                            View Reciept
                                          </a>
                                        </span>
                                      </td>
                                    </tr>
                                  )
                                )
                              ) : (
                                <p className="italic text-red-500 font-semibold">
                                  No Transactions to show
                                </p>
                              )}
                            </tbody>
                          </table>
                          {/* Pagination */}
                          <nav
                            className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                            aria-label="Pagination"
                          >
                            <div className="hidden sm:block">
                              <p className="text-sm text-gray-700">
                                Toatal Transactions{" "}
                                <span className="font-medium">
                                  {dashboard?.PaymentHistory.length}
                                </span>
                              </p>
                            </div>
                            {/* <div className="flex flex-1 justify-between sm:justify-end">
                              <a
                                href="/"
                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                              >
                                Previous
                              </a>
                              <a
                                href="/"
                                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                              >
                                Next
                              </a>
                            </div> */}
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Profile;
