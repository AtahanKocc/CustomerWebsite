
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
        {/* Yukarıdaki satır, darkMode true ise "dark" sınıfını ekler. */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Hero/> 
      <Services/>
      <Skills/>
      <Contact/>
      </main>
    </div>
  );
}

export default App;