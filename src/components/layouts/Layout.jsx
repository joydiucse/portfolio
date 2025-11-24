import {Outlet} from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx";

function Layout() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <Navbar/>
            <div className="">
                <Outlet/>
            </div>

        </div>
    );
}

export default Layout;
