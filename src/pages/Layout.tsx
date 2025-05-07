import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";

const App = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen bg-sky-300">
      {/* Navbar */}
      <NavBar onMenuClick={() => setMenuOpen(!menuOpen)} />

      {/* Sidebar */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Content */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
