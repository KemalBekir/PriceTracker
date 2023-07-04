import Logo from "@/assets/pricetracker-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {};

const Navbar = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-20 h-[90px] border-b border-gray-200 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <div className="fixed top-0 z-30 flex w-full items-center justify-between py-5">
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-16">
            <Link to="/" className="h-9 w-[210px]"><img className="h-9" src={Logo} alt="logo" /></Link>
            
            {isAboveMediumScreens ? (
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-between gap-8 text-sm">
                  <Link
                    className="text-xl font-medium transition duration-500 hover:text-emerald-600"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-xl font-medium transition duration-500 hover:text-emerald-600"
                    to="/about"
                  >
                    About us
                  </Link>
                  <Link
                    className="text-xl font-medium transition duration-500 hover:text-emerald-600"
                    to="/catalog"
                  >
                    Catalogue
                  </Link>
                </div>
                {/* <div className="relative hidden md:block ">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full rounded-full border bg-opacity-30 backdrop-blur-lg backdrop-filter border-black bg-white p-3 pl-10 text-lg text-black placeholder:align-bottom placeholder:text-xl focus:border-emerald-400 focus:ring-emerald-400"
                    placeholder="Search..."
                  />
                </div> */}
                <div className="flex items-center justify-between gap-8">
                  <Link
                    className="text-xl font-semibold transition duration-500 hover:text-emerald-600"
                    to="/login"
                  >
                    Sign In
                  </Link>
                  <Link className="text-xl font-semibold" to="/register">
                    <button className="rounded-full bg-black px-5 py-3 text-white transition duration-500 hover:bg-emerald-600 hover:text-white">
                      Become a Member
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <>
                {/* <div className="relative hidden md:block">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 mr-5">
                    <svg
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full rounded-full border border-black bg-white p-3 pl-10 text-lg text-black  placeholder:text-2xl focus:border-emerald-400 focus:ring-emerald-400"
                    placeholder="Search..."
                  />
                </div> */}
                <button
                  className="rounded-full bg-emerald-400 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="bototm-0 fixed right-0 z-40 min-h-screen w-[300px] bg-emerald-400 drop-shadow-xl ">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-8 w-8 text-white" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link className="font-bold text-white hover:text-black" to="/">
              Home
            </Link>
            <Link className="font-bold text-white hover:text-black" to="/about">
              About us
            </Link>
            <Link
              className="font-bold text-white hover:text-black"
              to="/catalog"
            >
              Catalogue
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
