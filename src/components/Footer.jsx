const Footer = () => {
  return (
    <footer className="mt-5 w-full bg-gray-500 text-white py-4">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm gap-3">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-4 bg-red-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">GT</span>
          </div>
          <span className="text-gray-300">GENTECH</span>
        </div>

        {/* Center Text */}
        <div className="text-center text-gray-300">
          generaltechnology.com.np | 9802300007 | © 2023. All rights reserved.
        </div>

        {/* Right section (if needed in future) */}
        <div className="flex items-center space-x-2">
          {/* Additional links or icons can go here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
