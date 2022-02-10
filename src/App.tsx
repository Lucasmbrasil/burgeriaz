import React from "react";
import "./App.css";
import CircleLeftBottom from "./components/CircleLeftBottom";
import CircleLeftTop from "./components/CircleLeftTop";
import CircleRight from "./components/CircleRight";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";

function App() {
  return (
    <>
      <div className="circle">
        <CircleLeftTop />
        <CircleRight />
        <CircleLeftBottom />
      </div>
      <div className="App">
        <Header />
        <div className="App-header">
          <LeftSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
