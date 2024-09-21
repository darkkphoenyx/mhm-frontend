import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "../pages/About";
import HomePage from "../pages/HomePage";

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    };

    handleScroll();

    const timer = setTimeout(handleScroll, 100);

    return () => clearTimeout(timer);
  }, [location]);

  // const noNavbarFooterRoutes = ["/login"];

  // const hideNavbarFooter = noNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {/* {!hideNavbarFooter && <Navbar />} */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* {!hideNavbarFooter && <Footer />} */}
    </>
  );
}
