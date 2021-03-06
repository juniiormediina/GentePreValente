import React, { useState } from "react";
import FontAwesome from "react-fontawesome";

/* Icons */
import logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);
  const [showmenumobile, setShowmenumobile] = useState(false);
  const [showempleos, setShowempleos] = useState(false);

  return (
    <div>
      <nav className="bg-gray">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <img className="w-12" src={logo} alt="Logo" />
                <p className="text-white font-medium">Gente PreValente</p>
              </div>
              {/* menu desktop */}
              <div className="hidden md:block">
                <div className="flex items-baseline">
                  <a
                    href="!#"
                    className="sm:ml-20 space-x-16 text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <FontAwesome name="search" className="mr-2" />
                    Buscar...
                  </a>
                  <a
                    href="!#"
                    className="sm:ml-36 space-x-16 text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <FontAwesome name="cogs" className="mr-2" />
                    Administración
                  </a>
                  <div>
                    <a
                      href="!#"
                      className="sm:ml-16 text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <FontAwesome name="suitcase" className="mr-2" />
                      Empleo
                    </a>
                    <button
                      type="button"
                      className="text-gray-200 focus:outline-none"
                      id="empleos-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() =>
                        showempleos
                          ? setShowempleos(false)
                          : setShowempleos(true)
                      }
                    >
                      <FontAwesome name="chevron-down" />
                    </button>
                  </div>
                  <div
                    showempleos={showempleos}
                    setShowempleos={setShowempleos}
                  >
                    {showempleos ? (
                      <div
                        className="absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 mr-96"
                        aria-orientation="vertical"
                        aria-labelledby="empleo-menu"
                      >
                        <a
                          href="!#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Your Profile
                        </a>

                        <a
                          href="!#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Settings
                        </a>

                        <a
                          href="!#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sign out
                        </a>
                      </div>
                    ) : null}
                  </div>
                  <a
                    href="!#"
                    className="sm:ml-7 space-x-16 text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <FontAwesome name="suitcase" className="mr-2" />
                    Mi CV
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="User"
                    />
                    <p className="ml-2 text-gray-200 px-1 py-2 rounded-md text-sm font-medium">
                      Daniel
                    </p>
                    <button
                      type="button"
                      className="text-gray-200 max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none"
                      id="user-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() =>
                        showmenu ? setShowmenu(false) : setShowmenu(true)
                      }
                    >
                      <FontAwesome name="chevron-down" className="ml-1" />
                    </button>
                  </div>
                  <div showmenu={showmenu} setShowmenu={setShowmenu}>
                    {showmenu ? (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <a
                          href="!#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Your Profile
                        </a>

                        <a
                          href="!#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Settings
                        </a>

                        <a
                          href="!#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            {/* button menu mobile */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() =>
                  showmenumobile
                    ? setShowmenumobile(false)
                    : setShowmenumobile(true)
                }
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          <div
            showmenumobile={showmenumobile}
            setShowmenumobile={setShowmenumobile}
          >
            {showmenumobile ? (
              <div className="md:hidden " id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="!#"
                    className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Buscar...
                  </a>

                  <a
                    href="!#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Administración
                  </a>

                  <a
                    href="!#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Empleo
                  </a>

                  <a
                    href="!#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Mi CV
                  </a>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        Daniel
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    <a
                      href="!#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      Your Profile
                    </a>

                    <a
                      href="!#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      Settings
                    </a>

                    <a
                      href="!#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
