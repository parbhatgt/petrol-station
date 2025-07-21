const Footer = () => {
  return (
    <footer className="mt-5 w-full bg-white shadow-xs py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-8 rounded flex items-center justify-center">
            <img
              src="/img/FB Logo.png"
              className="w-full h-full object-contain"
              alt="FB Logo"
            />
          </div>
        </div>

        {/* Center Text (optional) */}
        {/* <div className="absolute left-1/2 -translate-x-1/2 text-center text-gray-400 text-sm">
          generaltechnology.com.np | 9802300007 | © 2023. All rights reserved.
        </div> */}

        {/* Right: Logo Image */}
        <div className="flex items-center">
          <img
            src="/img/elite.png"
            alt="Elite Logo"
            className="h-8 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
