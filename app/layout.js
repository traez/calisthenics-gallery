/* Import libraries and components */
"use client";
import { useState,useEffect } from "react";
import "./globals.css";
import HeaderM from "./components/HeaderM";
import HeaderD from "./components/HeaderD";
import Footer from "./components/Footer";
import useMediaQuery from "./libraries/useMediaQuery";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

/* Export metadata 
export const metadata = {
  title: "Calisthenics Gallery",
  description: "Created by Trae Zeeofor",
}; */

/* 
Define the RootLayout component
Get the current pathname
Check if the pathname is for a mobile device
Set the Header component based on the device
Create a state variable to store the prefix
*/
export default function RootLayout({ children }) {
  const isMobile = useMediaQuery("(max-width: 799px)");
  const Header = isMobile ? HeaderM : HeaderD;

  const router = useRouter();
  const pathname = usePathname();

  const [prefix, setPrefix] = useState("home"); // Store prefix in state

  /* Handle navigation events */
  const handleNavigation = (event) => {
    const selectedOption = event.target.value;
    router.push(selectedOption);
  };

    /* Get the prefix for the current pathname */
  const getPrefix = (pathname) => {
    if (pathname.startsWith("/upper")) return "upper";
    if (pathname.startsWith("/lower")) return "lower";
    if (pathname.startsWith("/core")) return "core";
    return "home";
  };

    /* Update prefix state using setPrefix */
  const updatePrefix = () => {
    const newPrefix = getPrefix(pathname);
    setPrefix(newPrefix);
  };

      /* Call updatePrefix whenever pathname changes */
  useEffect(() => {
    updatePrefix();
  }, [pathname]);

        /* Return the RootLayout component */
  return (
    <html lang="en">
      <body>
        <main>
          <Header
            pathname={pathname}
            prefix={prefix} // Pass prefix as prop
            handleNavigation={handleNavigation} // Pass handleNavigation as prop
          />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
