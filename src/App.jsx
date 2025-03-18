import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Narbar2nd from './components/Narbar2nd';
import Main from "./components/Main";
function App() {
  const [width, setWidth] = useState("62%");

  useEffect(() => {
    const handleResize = () => {
      const zoomLevel = Math.round(window.devicePixelRatio * 100);
      setWidth(zoomLevel >= 125 ? "80%" : "62%");
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // ตรวจสอบค่าเริ่มต้น

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    // <div className="w-[62%] mx-auto">
    <div className="mx-auto" style={{ width }}>
      <Navbar />
      <Narbar2nd />
      <Main />

    </div>
  )
}

export default App
