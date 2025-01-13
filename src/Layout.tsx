import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <main className="main">
          <Navbar />
          <main className="content">
            <Outlet />
          </main>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
