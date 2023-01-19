import React from "react";
import "./App.css";
import { Home } from "./Home.js";
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import { AboutMyself } from "./components/AboutMyself/AboutMyself.js";
import Projects from "./components/Projects/Projects.js";
import Particles from "react-tsparticles";
import particlesOption from "./particles-config.json";
import { loadFull } from "tsparticles";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const PageLayout = ({ children }) => children;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.5,
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="App">
      <div className="app-frame">
        <div className="app-header">
          <Routes>
            <Route element={<AnimationLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMyself />} />
              <Route path="/projects" element={<Projects />} />
            </Route>
          </Routes>
        </div>
        <Particles
          className="particles-bg"
          id="tsparticles"
          init={particlesInit}
          options={particlesOption}
        />
      </div>

      <div className="app-content">
        <div className="app-content-text">
          <nav>
            <Link to="/">
              {" "}
              Home  <br /> <br />{" "}
            </Link>

            <Link to="/about-me">
              {" "}
              About Me  <br /> <br />
            </Link>

            <Link to="/projects">
              {" "}
              Projects  <br /> <br />
            </Link>

            <div className="app-content-contact">
              Contact 
              <br />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
