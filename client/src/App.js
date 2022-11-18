import TopHeader from "./components/Header/Header";
import MainPage from "./components/Body/Main";
import Arduino from "./components/Body/ArduinoTest";
import MicroBit from "./components/Body/MicroBit";
import Robots from "./components/Body/Robots";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HCSR04 from "./components/Body/HCSR04";
import Buzzer from "./components/Body/Buzzer";
import Servo from "./components/Body/Servo";



const App = () =>{
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopHeader />}> 
          <Route index element={<MainPage />} />
          <Route path="servoM" element={<Servo />} />
          <Route path="hcsr04" element={<HCSR04 />} />
          <Route path="buzzer" element={<Buzzer />} />
          <Route path="arduino" element={<Arduino />} />
          <Route path="microbit" element={<MicroBit />} />
          <Route path="robots" element={<Robots />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
