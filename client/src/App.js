import TopHeader from "./components/Header/Header";
import MainPage from "./components/Body/Main";
import Arduino from "./components/Body/ArduinoTest";
import MicroBit from "./components/Body/MicroBit";
import Robots from "./components/Body/Robots";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBarArduino from "./components/Body/SideBarArduino";



const App = () =>{
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopHeader />}> 
          <Route index element={<MainPage />} />
          <Route path="sidebararduino" element={<SideBarArduino />} />
          <Route path="arduino" element={<Arduino />} />
          <Route path="microbit" element={<MicroBit />} />
          <Route path="robots" element={<Robots />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
