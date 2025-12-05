import {Outlet} from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.jsx";

function Layout() {
    return (
        <div className="min-h-dvh bg-white dark:bg-gray-950 text-emerald-950 dark:text-gray-100 transition-colors">
            <Navbar/>
            <div className="">
                <Outlet/>
            </div>
            <Footer/>

        </div>
    );
}

export default Layout;
