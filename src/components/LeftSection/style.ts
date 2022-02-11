import styled from "styled-components";

export const LeftSectionContainer = styled.section`
  display: flex;
  text-align: left;
  flex-wrap: wrap;
  margin: 50px 0;
  width: 656px;
  @media screen and (max-width: 1440px) {
    width: 500px;
  }

  h1 {
    font-size: 77px;
    color: #0e0d2a;
    font-weight: 400;
    font-family: "Modak", cursive;
    line-height: 65px;
    span {
      color: #e39b00;
    }
  }
  h2 {
    font-family: "Open Sans";
    font-weight: 300;
    height: 67px;
    font-size: 28px;
    letter-spacing: 3px;
    line-height: 53px;
    color: #bbbbbb;
    font-weight: 300;
  }
  .description {
    width: 495px;
    margin: 20px 0;
    font-size: 16px;
    line-height: 25px;
    opacity: 0.8;
    color: #101010;
    font-weight: 250;
    font-family: "Roboto";
  }
  .getStartedButton {
    width: 205px;
    height: 50px;
    border: 2px solid rgba(14, 13, 42, 0.4);
    border-radius: 25px;

    p {
      font-size: 21px;
      letter-spacing: 2px;
      line-height: 47px;
      color: #000000;
      opacity: 0.6;
      margin: 0;
      font-weight: 300;
      text-align: center;
    }
    :hover {
      p {
        color: #ffffff;
        opacity: 1;
      }
      background-color: rgb(227, 155, 0);
      cursor: pointer;
      transition: 0.3s;
      :hover {
        border-color: #0e0d2a;
        transform: scale(1.1);
      }
    }
  }
  .food {
    position: absolute;
    top: 70%;
    left: 30%;
    z-index: -5;
    font-family: "Archivo", sans-serif;
    font-size: 146px;
    line-height: 65px;
    color: #f1f1f1;
    font-weight: 700;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000101;
    opacity: 0.4;
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
  @media screen and (max-width: 1440px) {
    width: 500px;
    h1 {
      font-size: 57px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 450px;
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 960px) {
    justify-content: center;
    text-align: center;
    margin: 50px 0;
  }
  @media screen and (max-width: 600px) {
    width: 380px;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
    }
  }
`;
