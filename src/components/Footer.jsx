const Footer = () => {
  return (
    <footer className="mt-5 w-full bg-white backdrop-blur-sm shadow-2xl py-4">
      <div className="container mx-auto  flex items-center justify-between">
      
        <div className="flex items-center space-x-2">
          <div className="w-12 h-8 rounded flex items-center justify-center">
            <img
              src="/img/FB Logo.png"
              className="w-full h-full object-contain"
              alt="FB Logo"
            />
          </div>
        </div>

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
