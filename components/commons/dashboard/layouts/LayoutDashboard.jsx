import DashboardSidebar from "../common/DashboardSidebar";
import DashboardHeader from "../common/DashboardHeader";
import ImageContextProvider from "../../../../context/imageContext";
import { useState } from "react";

export default function LayoutDashboard({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* <ImageContextProvider> */}
      <ImageContextProvider>
        <div className="flex h-screen">
          <DashboardSidebar
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {/* Content area */}
          <div className="flex flex-1 flex-col overflow-hidden">
            <DashboardHeader setMobileMenuOpen={setMobileMenuOpen} />

            {/* Main content */}

            {children}
          </div>
        </div>
        {/* </ImageContextProvider> */}
      </ImageContextProvider>
    </>
  );
}
