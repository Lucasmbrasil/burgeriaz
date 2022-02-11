import { HeaderContainer, NavContainer } from "./style";
import { RiMenu3Fill } from "react-icons/ri";

import logo from "../../assets/logo.png";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { SearchIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useMediaQuery } from "react-responsive";

const style = {
  width: "200px",
  marginLeft: "10px",
  padding: "10px 30px",
  fontFamily: '"Roboto", sans-serif',
  fontSize: "1.3rem",
  color: "#000000;",
  fontWeight: "250",
  borderRadius: "28px",
  backgroundColor: "#f8f8f8",
  border: "none",
};
const styleMenu = {
  cursor: "pointer",
  marginLeft: "40px",
  color: "#e39b00",
  width: "30px",
  transition: "0.2s",
  display: "flex",
  alignItems: "center",
};
const styleOptions = {
  backgroundColor: "#ffffff",
  color: "#0e0d2a",
  marginLeft: "15px",
  border: "1px solid #e39b00",
  fontWeight: 250,
  padding: "5px 10px",
  fontSize: "1.3rem",
};
const Header = () => {
  const mobileScreen = useMediaQuery({ query: "(min-width: 900px)" });
  return (
    <HeaderContainer>
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>
          BURGER<span>IAZ</span>
        </p>
      </div>
      <NavContainer>
        <p className="home">Home</p>
        <p>New Menu</p>
        <p>About Us</p>
        <p>Main Course</p>
        <InputGroup width="250px">
          <Input style={style} placeholder="Search" />
          <InputRightElement
            margin="11px 22px"
            pointerEvents="none"
            color="#bfbfbf"
            children={<SearchIcon color="gray.300" />}
          />
        </InputGroup>
        {!mobileScreen ? (
          <Menu>
            <MenuButton
              style={styleMenu}
              border="none"
              backgroundColor="#ffffff"
            >
              <RiMenu3Fill id="menuMobile" />
            </MenuButton>
            <MenuList>
              <MenuItem style={styleOptions}>Home</MenuItem>
              <MenuItem style={styleOptions}>New Menu</MenuItem>
              <MenuItem style={styleOptions}>About Us</MenuItem>
              <MenuItem style={styleOptions}>Main Course</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <RiMenu3Fill id="menuDesktop" />
        )}
      </NavContainer>
    </HeaderContainer>
  );
};
export default Header;
