import { useState } from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";

const App = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar onMenuClick={() => setMenuOpen(!menuOpen)} />

      {/* Sidebar */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 p-5 bg-sky-300 font-chewy">
        <h1 className="text-3xl font-bold text-pink-100">
          WELCOME TO FIZZY JELI
        </h1>
        <p className="mt-2 text-pink-400">
          FIND YOUR FAVOURITE FIZZY DRINKS AND JELLIES HERE!
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
