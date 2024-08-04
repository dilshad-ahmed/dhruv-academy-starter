import React from "react";
import Logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import ResponsiveMenu from "./ResponsiveMenu";
const MenuData = [
  {
    id: 1,
    title: "Home",
    url: "#",
  },
  {
    id: 2,
    title: "Youtube Blueprint Course",
    url: "#",
  },
  {
    id: 3,
    title: "ChatGPT Course",
    url: "#",
  },
  {
    id: 4,
    title: "Time Management Course",
    url: "#",
  },
  {
    id: 5,
    title: "E-books",
    url: "#",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="container">
        <div className="bg-black/60 backdrop-blur-3xl rounded-full py-3 px-4 flex items-center justify-between relative z-[99999]">
          {/* Logo section */}
          <div>
            <img src={Logo} alt="" className="max-w-[120px]" />
          </div>
          {/* Menu section */}
          <div></div>
        </div>
        {/* Mobile Responsive menu */}
        <ResponsiveMenu isOpen={isOpen} />
      </nav>
    </>
  );
};

export default Navbar;
