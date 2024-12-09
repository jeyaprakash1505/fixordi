import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
