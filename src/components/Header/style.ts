import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 57px;
  line-height: 41px;
  justify-content: space-between;
  @media screen and (max-width: 1050px) {
    justify-content: center;
  }

  align-items: center;
  font-weight: 250;

  font-size: 1.3rem;
  padding-top: 30px;
  .logo {
    display: flex;
    align-items: center;
    font-weight: 900;
    span {
      color: #e39b00;
    }
    img {
      width: 20px;
      height: 24px;
      margin-right: 10px;
    }
  }
  .home {
    color: #101010;
    font-weight: 700;
  }
  p {
    cursor: pointer;
    width: 150px;
    opacity: 0.7;
    transition: 0.2s;
    :hover {
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 1220px) {
    p {
      width: 120px;
      font-size: 1.1rem;
    }
  }
`;
export const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  opacity: 0.7;
  #menuDesktop {
    cursor: pointer;
    color: #e39b00;
    font-size: 25px;
    margin-left: 40px;
    transition: 0.2s;
    :hover {
      transform: scale(1.2);
    }
  }
  #menuMobile {
    cursor: pointer;
    color: #e39b00;
    font-size: 25px;
  }
  @media screen and (max-width: 900px) {
    p {
      display: none;
    }
  }
`;
