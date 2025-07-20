import { useState } from "react";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const [currentTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  });

  const [currentDate] = useState(() => {
    const now = new Date();
    return now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  });
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navbar can go here */}
      <header className="relative h-14 z-10 flex justify-between items-center p-3 bg-gray-100 backdrop-blur-sm shadow-sm">
        <div className="flex items-center space-x-3">
          {/* <img src="img/logo.svg" alt="global logo" className="w-50 h-auto" /> */}
          <h1 className="text-2xl font-bold text-black tracking-wide">
            PETROL STATION
          </h1>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium text-red-700">{currentDate}</p>
          <p className="text-lg font-semibold text-[#0E4382]">{currentTime}</p>
        </div>
      </header>
      <main className="flex-grow bg-gray-100">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
