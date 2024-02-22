import MainLayout from "./components/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import HomePage from "./Pages/Homepage";
import Services from "./Pages/Services";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
