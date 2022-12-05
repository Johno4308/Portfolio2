import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer path="/footer" />
    </Fragment>
  );
}

export default App;
