import { HeaderContainer, NavContainer } from "./style";
const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <p>LOGO</p>
      </div>
      <NavContainer>
        <p>Home</p>
        <p>New Menu</p>
        <p>About Us</p>
        <p>Main Course</p>
        <p className="searchbar">Searchbar</p>
      </NavContainer>
    </HeaderContainer>
  );
};
export default Header;
