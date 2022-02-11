import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #fafafa;
}
h1,
h2,
h3,
p {
  margin: 0;
}
`;
export const GlobalContainer = styled.main`
  text-align: center;
  width: 90vw;
  margin: 0 auto;
`;
export const CirclesContainer = styled.div`
  height: 110vh;
  width: 100%;
  position: absolute;
  z-index: -1;
  overflow: clip;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const MainContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70vh;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
