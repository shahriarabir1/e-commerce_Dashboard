import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const auth = localStorage.getItem("user");
  const name = auth ? JSON.parse(auth).firstname : null;

  const handleLogout = () => {
    localStorage.clear();
    location.reload();
  };
  const layer1 = (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      <li>
        <Link
          to="/"
          className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0"
          aria-current="page"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/products"
          className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0 "
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          to="/addproducts"
          className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0 "
        >
          Add Products
        </Link>
      </li>
      <li>
        <Link
          to="/updateproducts"
          className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0 "
        >
          Update Products
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0 "
        >
          Contact
        </Link>
      </li>
    </ul>
  );
  const layer2 = (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      {" "}
      <li className="flex items-center text-white">
        <p className="mr-4 text-xl">Hi {name}</p>
        <Link
          to="/profile"
          className=" py-2 pl-3 pr-4 text-white text-4xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0"
          aria-current="page"
        >
          <FaRegUserCircle />
        </Link>
      </li>
      <li>
        <Link
          to="/logout"
          className="block py-2 pl-3 pr-4 text-white  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0"
          aria-current="page"
        >
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 md:hover:text-red-500  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            onClick={handleLogout}
          >
            Log out
          </button>
        </Link>
      </li>
    </ul>
  );
  return (
    <div className="relative">
      <nav
        className="bg-Emerald-900 border-gray-700"
        style={{ boxShadow: "1px 1px 5px black" }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden  w-screen md:flex justify-between items-center "
            id="navbar-default"
          >
            {auth ? layer1 : <div></div>}
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              {auth ? (
                layer2
              ) : (
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                  <li>
                    {" "}
                    <Link
                      to="/login"
                      className="block py-2 pl-3 pr-4  text-white  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0"
                      aria-current="page"
                    >
                      <button
                        type="button"
                        className="text-white border  hover:bg-blue-800 md:hover:text-black  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                      >
                        Log in
                      </button>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/signup"
                      className="block py-2 pl-3 pr-4 text-white  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0"
                      aria-current="page"
                    >
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-400 md:hover:text-black  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                      >
                        Sign up
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
