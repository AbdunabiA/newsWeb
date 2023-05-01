import Navbar from "./navbar";
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
      <div id="layout">
        <Navbar />
        <Outlet />
      </div>
    );
} 

export default Layout