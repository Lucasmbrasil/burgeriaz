import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <LeftSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
