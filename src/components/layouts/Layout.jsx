import {Outlet} from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx";

function Layout() {
    return (
        <div className="">
            <Navbar/>
            <div className="">
                <Outlet/>
            </div>

        </div>
    );
}

export default Layout;
