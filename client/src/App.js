import TopHeader from "./components/Header/Header";
import Blogs from "./components/Body/TestBlogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>{
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopHeader />}> 
          <Route index element={<Blogs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Blogs />} />
          <Route path="*" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
