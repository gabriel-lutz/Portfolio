import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import CoffeProductPage from "./Pages/CoffeProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/coffe" element={<CoffeProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
