import { useState } from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar onMenuClick={() => setMenuOpen(!menuOpen)} />

      {/* Sidebar */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 p-5 bg-gray-100">
        <h1 className="text-3xl font-bold">Welcome to Fizzy Jeli</h1>
        <p className="mt-2 text-gray-600">
          Find your favorite fizzy drinks and jellies here!
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
