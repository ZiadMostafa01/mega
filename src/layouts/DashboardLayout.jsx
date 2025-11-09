import { Outlet } from "react-router-dom";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#f2f6fe] p-1 sm:p-2 rounded-xl sm:rounded-2xl">
      {/* SIDEBAR SECTION */}
      <Sidebar className="hidden sm:block sm:w-1/4 lg:w-1/6" />

      {/* MAIN CONTENT SECTION */}
      <div className="flex-1 flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
        <Header className="px-2 sm:px-4 py-3 sm:py-6" />
        <Outlet className="p-2 sm:p-4 flex-1" />
      </div>
    </div>
  );
}
export default DashboardLayout;
