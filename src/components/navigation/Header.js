/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const navigation = {
    categories: [
      {
        name: "Browse Offerings",
        link: "/offerings",
        featured: [
          {
            name: "New Offerings",
            href: "/offerings",
            imageSrc: "/logomark.png",
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
      { name: "Raise", href: "/raise-funds" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact Us", href: "/contact" },
      { name: "Offerings", href: "/offerings" },
    ],
  };

  // const userNavigation = [
  //   { name: "Offerings", href: "/offerings" },
  //   { name: "Portfolio", href: "/profile" },
  //   { name: "My Account", href: "/profile/update" },
  // ];

  return (
    <>
      <header className="relative z-20">
        <nav aria-label="Top">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <span className="sr-only">ChainRaise</span>
                  <Link to="/">
                    <img
                      className="h-8 w-auto cursor-pointer"
                      src="/assets/chainraise_logo_black_text.png"
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

                    <a
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-cr-secondary"
                      href="/assets/NEW-Educational-Materials-ChainRaise-Portal-LLC-9_28_22.docx.pdf"
                      target={"_blank"}
                    >
                      Learn
                    </a>
                    {/* <div className="my-auto h-8 border border-gray-300"></div> */}
                    {/* MENU THAT WILL APPEAR WHEN THE USER WILL BE LOGED IN */}
                    {/* {userNavigation.map((page, index) => (
                      <Link
                        key={index}
                        to={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-cr-secondary"
                      >
                       
                        <a className="text-gray-700">{page.name}</a>
                      </Link>
                    ))} */}
                  </div>
                </div>
                {/* eslint-disable-next-line */}
                <div className="flex flex-1 items-center justify-end lg:block">
                  <div className="flex space-x-5 justify-end">
                    <Link
                      to="/auth/signin"
                      className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:ml-8 lg:block"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/auth/signup"
                      className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:ml-8 lg:block"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    // onClick={() => setOpen(true)}
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

                  {/* {session && (
                    <div className="flex items-center lg:ml-8">
                      <span className="relative inline-block">
                        <Link href="/profile">
                          <img
                            className="h-12 w-12 cursor-pointer rounded-full"
                            src={session?.user?.image || "/default_user.png"}
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
