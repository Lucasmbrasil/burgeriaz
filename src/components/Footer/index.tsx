import { FooterContainer } from "./style";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <FooterContainer>
      <div className="about">
        <span>
          {" "}
          <div className="line"></div>About Us
        </span>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. mpor
          incididunt utmpor
        </p>
      </div>
      <div className="medias">
        <p>Don't Miss Our Promo On</p>
        <div className="iconsContainer">
          <div className="icons">
            <BsFacebook />
          </div>
          <div className="icons instagram">
            <AiFillInstagram />
          </div>
          <div className="icons">
            <AiFillTwitterCircle />
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
export default Footer;
