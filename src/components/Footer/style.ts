import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  width: 80vw;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-end;
  .about {
    width: 401px;
    height: 142px;
    font-size: 16px;
    h3 {
      text-align: left;
      margin: 0;
      font-size: 25px;
      line-height: 41px;
      color: #e39b00;
      font-weight: 700;
      font-family: "Roboto";
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
    div {
      margin: 0 12.5px;
    }
  }
`;
