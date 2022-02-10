import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: left;
  .description {
    font-size: 17px;
    line-height: 21px;
    font-weight: 250;
    opacity: 0.8;
    color: #101010;
  }
  .about {
    width: 401px;
    height: 142px;
    font-size: 16px;
    .line {
      position: absolute;
      left: 0;
      width: 7.5vw;
      border-top: 5px solid black;
    }
    span {
      text-align: left;
      font-size: 25px;
      line-height: 41px;
      color: #e39b00;
      font-weight: 700;
      display: flex;
      align-items: center;
    }
    p {
      margin-top: 10px;
      /* text-align: left; */
    }
  }
  .medias {
    width: 563px;
    height: 77px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 25px;
    line-height: 41px;
    color: #000000;
    font-weight: 400;
    opacity: 0.7;
    div,
    p {
      margin: 0 12.5px;
      font-weight: 300;
    }
    .icons {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
      background-color: #ffffff;
      color: #0e0d2a;
      opacity: 1;
      filter: drop-shadow(0px 8px 20px rgba(0, 1, 1, 0.1));
    }
    .instagram {
      width: 50px;
      height: 50px;
      font-size: 30px;
    }
  }
`;
