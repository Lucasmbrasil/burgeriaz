import styled from "styled-components";

export const LeftSectionContainer = styled.section`
  display: flex;
  text-align: left;
  flex-wrap: wrap;
  width: 656px;
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
    border: 2px solid rgba(14, 13, 42, 0.4000000059604645);
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
  }
`;
