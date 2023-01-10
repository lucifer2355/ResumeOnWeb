import React from "react";
import Header from "../components/header";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Portfolio from "./portfolio";

const Layout = () => {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Layout;
