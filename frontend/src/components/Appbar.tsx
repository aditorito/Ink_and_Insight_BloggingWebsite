import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
      {/* Logo */}
      <Link to={'/allposts'}>
      <div className="flex items-center">
        <a href="/" className="text-xl font-serif font-bold">
          BholuBlogs
        </a>
      </div>
      </Link>

      {/* Search and Actions */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative hidden sm:flex items-center">
          <div className="absolute left-3 text-gray-500">
            <div className="w-4 h-4 border-2 border-current rounded-full relative">
              <div className="absolute w-2 h-0.5 bg-current -right-1 bottom-0 rotate-45 origin-left"></div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1.5 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-gray-200 focus:outline-none w-64"
          />
        </div>

        {/* Write Button */}
        <Link to={'/publish'}>
        <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <div className="relative w-5 h-5">
            <div className="absolute w-4 h-4 border-2 border-current rounded-sm top-0 left-0"></div>
            <div className="absolute w-2.5 h-0.5 bg-current transform rotate-45 top-2 left-1"></div>
          </div>
          <button className="hidden sm:inline">Write</button>
        </button>
        </Link>

        {/* Notifications */}
        <button className="text-gray-700 hover:text-gray-900 relative">
          <div className="w-5 h-5 relative">
            <div className="w-4 h-4 border-2 border-current rounded-full absolute top-0 left-0.5"></div>
            <div className="w-1 h-2 bg-current absolute bottom-0 left-2"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full absolute -top-1 -right-1"></div>
          </div>
        </button>

        {/* Profile Picture */}
        <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <img
            src="/api/placeholder/32/32"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
};

export default AppBar;