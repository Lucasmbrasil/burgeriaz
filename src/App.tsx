import React from "react";
import CircleLeftBottom from "./components/CircleLeftBottom";
import CircleLeftTop from "./components/CircleLeftTop";
import CircleRight from "./components/CircleRight";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import Slider from "./components/Slider";
import {
  CirclesContainer,
  GlobalContainer,
  GlobalStyle,
  MainContainer,
} from "./global";

function App() {
  return (
    <>
      <GlobalStyle />
      <CirclesContainer>
        <CircleLeftTop />
        <CircleRight />
        <CircleLeftBottom />
      </CirclesContainer>
      <GlobalContainer>
        <Header />
        <MainContainer>
          <LeftSection />
          <Slider />
        </MainContainer>
        <Footer />
      </GlobalContainer>
    </>
  );
}

export default App;
