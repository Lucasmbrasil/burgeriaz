import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 80vw;
  height: 57px;
  justify-content: space-between;
  align-items: center;
  font-weight: 250;
  .home {
    color: #101010;
    font-weight: 700;
  }
`;
export const NavContainer = styled.nav`
  display: flex;
  p {
    width: 169px;
  }
  .searchbar {
    width: 220px;
    border: 1px solid black;
  }
`;
