import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  });

  const [currentDate, setCurrentDate] = useState(() => {
    const now = new Date();
    return now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      setCurrentDate(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      );
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100 overflow-hidden">
      {/* Header */}
      <header className="h-[80px] min-h-[80px] flex justify-between items-center px-6 bg-gray-100 ">
        <img src="/img/logo_1.png" alt="Logo" className="h-full object-contain" />

        <div className="text-right">
          <p className="text-lg md:text-base">{currentDate}</p>
          <p className="text-lg md:text-xl font-semibold">{currentTime}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-100 p-4 md:p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="h-[70px] min-h-[70px]  text-white flex items-center justify-center text-sm md:text-base">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
