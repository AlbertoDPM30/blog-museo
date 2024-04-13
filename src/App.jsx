import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, GonzaloRinconGutierres } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/museo-arqueologico-gonzalo-rincon-guitierres"
            element={<GonzaloRinconGutierres />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
