import { MdDashboard } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { CiWallet } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { DiGoogleAnalytics } from "react-icons/di";
import { TbReportAnalytics } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaInbox } from "react-icons/fa";
import { PiMoneyWavyLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import logoImage from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({ className = "" }) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <MdDashboard className="w-5 h-5" />,
      to: "/dashboard/",
    },
    {
      name: "Analytics",
      icon: <GrAnalytics className="w-5 h-5" />,
      to: "/dashboard/test",
    },
    { name: "Sales", icon: <CiWallet className="w-5 h-5" /> },
    { name: "Products", icon: <IoBagHandleOutline className="w-5 h-5" /> },
    { name: "Customer", icon: <DiGoogleAnalytics className="w-5 h-5" /> },
    { name: "Traffic", icon: <TbReportAnalytics className="w-5 h-5" /> },
    { name: "Reports", icon: <TbReportAnalytics className="w-5 h-5" /> },
    { name: "Profile", icon: <CgProfile className="w-5 h-5" /> },
    { name: "Inbox", icon: <FaInbox className="w-5 h-5" /> },
    { name: "Accounting", icon: <PiMoneyWavyLight className="w-5 h-5" /> },
    { name: "Settings", icon: <IoSettingsOutline className="w-5 h-5" /> },
  ];

  return (
    <div className={`h-full overflow-hidden w-64 ${className}`}>
      {/* LOGO SECTION */}
      <div className="m-4 flex mb-8">
        <div className="w-32">
          <img src={logoImage} alt="Company Logo" className="w-full h-auto" />
        </div>
      </div>

      {/* NAVIGATION MENU SECTION */}
      <nav className="mt-4">
        <ul className="px-2 space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                as={"button"}
                to={item.to}
                className="w-full flex items-center text-left px-3 py-3 text-sm font-medium text-gray-500 hover:bg-[#3178d5d4] hover:text-white rounded-lg transition-all duration-200 cursor-pointer"
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
