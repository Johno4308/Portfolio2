import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import LearnMore from "./pages/LearnMore";
import BookNow from "./pages/BookNow";
import Pricing from "./pages/Pricing";
import Location from "./pages/Locations";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/booknow" element={<BookNow />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
