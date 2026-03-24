import { Outlet } from "react-router-dom";
import HeaderNavbar from "./HeaderNav";

function Layout(){
    return (
        <>
        <HeaderNavbar/>
        <Outlet/>
        </>
    )
}

export default Layout;