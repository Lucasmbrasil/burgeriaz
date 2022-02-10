import { FooterContainer } from "./style";

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
        <div>FB</div>
        <div>IG</div>
        <div>TT</div>
      </div>
    </FooterContainer>
  );
};
export default Footer;
