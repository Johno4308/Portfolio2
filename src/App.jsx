import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ContactMe from "./pages/ContactMe";
import BookNow from "./pages/BookNow";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/booknow" element={<BookNow />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
