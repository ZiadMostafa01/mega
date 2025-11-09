import profileImage from '../../assets/images/dashboard/logo.png';

export default function Header({ className, onToggleSidebar }) {
  return (
    <div className={`bg-[#FEFEFE] p-2 sm:p-3 lg:p-4 ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0">
      
        {/* TITLE SECTION */}
        <div className="flex items-center justify-between lg:flex-1">

          {/* HAMBURGER MENU - Mobile only */}
          <button 
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>

          {/* PAGE TITLE */}
          <div className="text-right md:text-left flex-1 px-4"> 
            <h1 className=" text-xl font-bold text-gray-800">
              Dashboard Overview
            </h1>
            <p className="text-gray-400 font-medium text-xs sm:text-sm lg:text-base mt-1">
              12:15 PM at 19th November 2020
            </p>
          </div>
        </div>
      
        {/* SEARCH & PROFILE SECTION */}
        <div className="flex items-center lg:justify-between gap-4 max-w-2xl lg:w-3/5 w-full">
         
          {/* SEARCH BAR */}
          <div className="relative flex-1 lg:flex-1">
            <input
              type="text"
              placeholder="search..."
              className="pl-8 sm:pl-10 pr-2 sm:pr-4 py-1 sm:py-2 bg-gray-100 rounded-lg text-md focus:outline-none focus:bg-white border border-gray-200 w-full"
            />
            <div className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* FILTER DROPDOWN */}
          <div className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-all duration-200 whitespace-nowrap">
            <span className="text-md text-gray-700">This Year</span>
            <span className="text-gray-500 text-xs">▼</span>
          </div>

          {/* PROFILE IMAGE */}
          <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden cursor-pointer shrink-0">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}