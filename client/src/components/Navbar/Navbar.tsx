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
    <nav className="sticky top-0 z-20 border-b border-gray-200 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter h-[90px]">
      <div className="fixed top-0 z-30 flex w-full items-center justify-between py-5">
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-16">
            <img className="h-9" src={Logo} alt="logo" />

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
                <div className="flex items-center justify-between gap-8">
                  <Link className="text-xl font-semibold transition duration-500 hover:text-emerald-600" to="/login">
                    Sign In
                  </Link>
                  <Link className="text-xl font-semibold" to="/register">
                    <button className="rounded-full py-3 px-5 transition duration-500 bg-black text-white hover:bg-emerald-600 hover:text-white">Become a Member</button>
                  </Link>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-emerald-400 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bototm-0 z-40 min-h-screen w-[300px] drop-shadow-xl bg-emerald-400 ">
          <div className="flex justify-end p-12">
            <button  onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-8 w-8 text-white" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link className="text-white font-bold hover:text-black" to="/">
              Home
            </Link>
            <Link className="text-white font-bold hover:text-black" to="/about">
              About us
            </Link>
            <Link className="text-white font-bold hover:text-black" to="/catalog">
              Catalogue
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;