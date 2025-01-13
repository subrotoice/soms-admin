import { useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import { PiSquaresFourDuotone } from "react-icons/pi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <MdMenuOpen size={30} /> স্মার্ট অফিস ম্যানেজমেন্ট সিস্টেম
      </div>
      <div className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? "✖" : "☰"}
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <CiSearch />
        </li>
        <li>
          <PiSquaresFourDuotone />
        </li>
        <li>
          <BsFullscreen />
        </li>
        <li>
          <IoIosNotifications />
        </li>
        <li className="profile-info">
          <img
            src="https://soms.gov.bd/backoffice/uploads/userphotos/1667726621.jpg"
            alt=""
          />{" "}
          সুব্রত বিশ্বাস
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
