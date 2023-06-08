import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
