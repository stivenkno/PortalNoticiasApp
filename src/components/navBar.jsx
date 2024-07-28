import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const APP_ROUTES = [
    {
        pathname: "/",
        name: "Home"
    },
    {
        pathname: "/search",
        name: "Search"
    }
]

const ACTIVE_ITEM_CLASS = `block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`;
const INACTIVE_ITEM_CLASS = `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`;

/* dark or light */
const changeTheme = (currentTheme, nextTheme) => {
    localStorage.removeItem("theme", currentTheme);
    localStorage.setItem("theme", nextTheme);
    const appElement = document.body;
    appElement.classList.remove("dark", "light");
    appElement.classList.add(nextTheme);
}

const NavBar = ( ) => {
    const { pathname } = useLocation();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
      }, [theme])

    const handleChangeTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        changeTheme(theme, nextTheme);
    }
    return ( 
        <nav className="w-full h-32 bg-white border-gray-200 dark:bg-gray-900 flex  items-center">
          <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 justify-between w-full">
            <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">News App</span>
            </NavLink>
            <div className="flex px-10 gap-x-2">
                    <button onClick={handleChangeTheme}>
                        {theme === "light" ? (
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
                        </svg>
                        ) : (
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                            </svg>
                        )}
                    </button>
                </div>
                <div className="flex flex-col">
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden md:flex md:w-auto " id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {APP_ROUTES.map(
                            (item, index) => (
                                <li key={index}>
                                    <NavLink to={item.pathname} className={item.pathname === pathname ? ACTIVE_ITEM_CLASS : INACTIVE_ITEM_CLASS} aria-current={item.pathname === pathname ? "page" : "location"}>
                                    {item.name}
                                    </NavLink>
                                </li>
                            )
                        )}
                    </ul>
                    </div>
                </div>
            
          </div>
        </nav>
        )
}

export default NavBar;