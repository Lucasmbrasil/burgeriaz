import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  width: 80vw;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-end;
  text-align: left;
  .description {
    font-size: 16px;
    line-height: 25px;
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
      color: #e39b00;
      font-weight: 600;
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
    font-size: 25px;
    line-height: 41px;
    color: #000000;
    font-weight: 400;
    div,
    p {
      margin: 0 12.5px;
      font-weight: 300;
    }
  }
`;
