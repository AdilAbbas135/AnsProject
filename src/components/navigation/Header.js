/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const session = useSelector((state) => state.session.session);
  // console.log(session);
  const navigation = {
    categories: [
      {
        name: "Browse Offerings",
        link: "/offerings",
        featured: [
          {
            name: "Offerings",
            href: "/offerings",
            imageSrc: "/assets/logomark.png",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Organizations",
            href: "/organizations",
            imageSrc:
              "https://media.istockphoto.com/photos/stack-of-hands-unity-and-teamwork-concept-picture-id1289963489?b=1&k=20&m=1289963489&s=170667a&w=0&h=5RZ6cQ5UWYgyjK52ele9lSmyIBem2uMIR66S-1faWSs=",
            imageAlt:
              "Model wearing minimalist watch with black wristband and white watch face.",
          },
        ],
      },
    ],
    pages: [
      { name: "FAQ", href: "/faq" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  const userNavigation = [
    { name: "Offerings", href: "/offerings" },
    { name: "Portfolio", href: "/profile" },
    { name: "My Account", href: "/profile/update" },
  ];

  return (
    <>
      <header className="relative z-20">
        <nav aria-label="Top">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <span className="sr-only">Care & Share</span>
                  <Link to="/">
                    <img
                      className="h-8 w-auto cursor-pointer"
                      src="/assets/chainraise_logo_black_text.jpeg"
                      alt="profile-picture"
                    />
                  </Link>
                </div>

                {/* MAIN DESKTOP MENU */}
                <div className="hidden h-full lg:flex items-center">
                  <div className="flex h-full justify-center space-x-8 border-none">
                    {navigation.pages.map((page, index) => (
                      <Link
                        to={page.href}
                        key={index}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-cr-secondary"
                      >
                        {/* eslint-disable-next-line */}
                        <a className="text-gray-700">{page.name}</a>
                      </Link>
                    ))}

                    {session.user.userId && (
                      <div className="my-auto h-8 border border-gray-300"></div>
                    )}
                    {session.user.userId &&
                      userNavigation.map((page, index) => (
                        <Link
                          key={index}
                          to={page.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-cr-secondary"
                        >
                          {page.name}
                        </Link>
                      ))}
                  </div>
                </div>

                {/* MOBILE MENU */}
                <Transition.Root show={open} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-40 lg:hidden"
                    onClose={setOpen}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="transition-opacity ease-linear duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                      <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                      >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                          <div className="flex px-4 pt-5 pb-2">
                            <button
                              type="button"
                              className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close menu</span>
                              <IoClose className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>

                          {/* Links */}
                          <Tab.Group as="div" className="mt-2">
                            <div className="border-b border-gray-200">
                              <Tab.List className="-mb-px flex space-x-8 px-4">
                                {navigation.categories.map((category) => (
                                  <Tab
                                    key={category.name}
                                    // className={({ selected }) =>
                                    //   classNames(
                                    //     selected
                                    //       ? "border-indigo-600 text-indigo-600"
                                    //       : "border-transparent text-gray-900",
                                    //     "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                                    //   )
                                    // }
                                  >
                                    {category.name}
                                  </Tab>
                                ))}
                              </Tab.List>
                            </div>
                            <Tab.Panels as={Fragment}>
                              {navigation.categories.map((category) => (
                                <Tab.Panel
                                  key={category.name}
                                  className="space-y-12 px-4 py-6"
                                >
                                  <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                    {category.featured.map((item) => (
                                      <div
                                        key={item.name}
                                        className="group relative"
                                      >
                                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                          <img
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className="object-cover object-center"
                                          />
                                        </div>
                                        <a
                                          href={item.href}
                                          className="mt-6 block text-sm font-medium text-gray-900"
                                        >
                                          <span
                                            className="absolute inset-0 z-10"
                                            aria-hidden="true"
                                          />
                                          {item.name}
                                        </a>
                                      </div>
                                    ))}
                                  </div>
                                </Tab.Panel>
                              ))}
                            </Tab.Panels>
                          </Tab.Group>

                          <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                            {navigation.pages.map((page) => (
                              <div key={page.name} className="flow-root">
                                <a
                                  href={page.href}
                                  className="-m-2 block p-2 font-medium text-gray-900"
                                >
                                  {page.name}
                                </a>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                            {session.user.userId ? (
                              <>
                                <div className="flow-root">
                                  <button
                                    // onClick={() => signOut()}
                                    className="-m-2 block p-2 font-medium text-gray-900"
                                  >
                                    Your Profile
                                  </button>
                                </div>
                                <div className="flow-root">
                                  <button
                                    // onClick={() => signOut()}
                                    className="-m-2 block p-2 font-medium text-gray-900"
                                  >
                                    Settings
                                  </button>
                                </div>
                                <div className="flow-root">
                                  <button
                                    // onClick={() => signOut()}
                                    className="-m-2 block p-2 font-medium text-gray-900"
                                  >
                                    Sign Out
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flow-root">
                                  <a
                                    href="/"
                                    className="-m-2 block p-2 font-medium text-gray-900"
                                  >
                                    Create an account
                                  </a>
                                </div>
                                <div className="flow-root">
                                  <Link
                                    href="/auth/signin"
                                    className="-m-2 block p-2 font-medium text-gray-900"
                                  >
                                    {/* <a
                                    href="https://beta.chainraise.info/manage/login"
                                    target={"_blank"}
                                    rel="noreferrer"
                                  > */}
                                    {/* eslint-disable-next-line */}
                                    <a>Sign In</a>
                                  </Link>
                                </div>
                              </>
                            )}
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition.Root>
                {/* DESKTOP LOGIN AND SIGNUP LINKS */}
                {session.user.userId ? (
                  <div className="flex flex-1 items-center justify-end lg:ml-8">
                    <Link
                      onClick={() => {
                        localStorage.removeItem("authtoken");
                        window.location.href("/");
                      }}
                      className="hidden mr-5 text-sm font-medium text-gray-700 hover:text-gray-800 lg:ml-8 lg:block"
                    >
                      Sign Out
                    </Link>
                    <span className="relative inline-block">
                      <Link to="/profile/update">
                        <img
                          className="h-12 w-12 cursor-pointer rounded-full"
                          src={
                            session.user.image
                              ? session.user.image
                              : "/assets/default_user.png"
                          }
                          alt=""
                        />
                      </Link>

                      <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-cr-secondary ring-2 ring-white" />
                    </span>
                  </div>
                ) : (
                  <div className="hidden flex-1 items-center justify-end lg:block">
                    <div className="flex space-x-5 justify-end">
                      <Link
                        to="/auth/signin"
                        className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:ml-8 lg:block"
                      >
                        {/* eslint-disable-next-line */}
                        <a>Sign In </a>
                      </Link>
                      <Link
                        to="/auth/signup"
                        className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:ml-8 lg:block"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                )}

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <HiMenu className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Logo (lg-) */}
                <Link to="/" className="lg:hidden">
                  {/* eslint-disable-next-line */}
                  <a>
                    <span className="sr-only">Workflow</span>
                    <img
                      src="/assets/chainraise_logo.png"
                      alt="ChainRaise Logo"
                      className="h-8 w-auto"
                    />
                  </a>
                </Link>

                <div className="flex flex-1 items-center justify-end lg:hidden">
                  <div className="space-x-5">
                    <Link
                      to="/auth/signin"
                      className=" text-sm font-medium text-gray-700 hover:text-gray-800 lg:ml-8 lg:block"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/auth/signup"
                      className=" text-sm font-medium text-gray-700 hover:text-gray-800 lg:ml-8 lg:block"
                    >
                      Sign Up
                    </Link>
                  </div>

                  {/* {session.user.userId && (
                    <div className="flex items-center lg:ml-8">
                      {console.log("i am in it")}
                      <span className="relative inline-block">
                        <Link href="/profile">
                          <img
                            className="h-12 w-12 cursor-pointer rounded-full"
                            src={
                              session?.user?.image || "/assets/default_user.png"
                            }
                            alt=""
                          />
                        </Link>

                        <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-cr-secondary ring-2 ring-white" />
                      </span>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
