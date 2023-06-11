import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import CoffeProductPage from "./Pages/CoffeProductPage";
import ScrollToTop from "./Components/ScrollToTop";
import NecklaceProductPage from "./Pages/NecklaceProductPage";
import DryerProductPage from "./Pages/DryeProductPage";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/coffe" element={<CoffeProductPage/>} />
        <Route exact path="/necklace" element={<NecklaceProductPage/>}/>
        <Route exact path="/dryer" element={<DryerProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
