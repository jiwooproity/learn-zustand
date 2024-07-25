import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./widgets";
import CountPage from "./page/count-page";
import TextPage from "./page/text-page";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter basename="/learn-zustand">
        <Navbar />
        <Routes>
          <Route path="/" element={<TextPage />} />
          <Route path="/count" element={<CountPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
