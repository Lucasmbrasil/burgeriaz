import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 80vw;
  margin: 0 auto;
  justify-content: space-between;
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
