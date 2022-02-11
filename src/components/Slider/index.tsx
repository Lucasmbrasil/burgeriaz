import { useMediaQuery } from "react-responsive";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";

const images = [
  { url: image1 },
  { url: image2 },
  { url: image3 },
  { url: image4 },
  { url: image5 },
];

const Slider = () => {
  const ultraScreen = useMediaQuery({ query: "(min-width: 1440px)" });
  const bigScreen = useMediaQuery({ query: "(min-width: 1200px)" });
  const tabletScreen = useMediaQuery({ query: "(min-width: 960px)" });
  const mobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  const style = {
    borderRadius: "50%",
    zIndex: -10,
  };
  return (
    <div>
      <SimpleImageSlider
        bgColor="#ffffff"
        style={style}
        slideDuration={1}
        width={
          ultraScreen
            ? 550
            : bigScreen
            ? 500
            : tabletScreen
            ? 400
            : mobileScreen
            ? 400
            : 500
        }
        height={
          ultraScreen
            ? 465
            : bigScreen
            ? 425
            : tabletScreen
            ? 340
            : mobileScreen
            ? 340
            : 425
        }
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
      />
    </div>
  );
};
export default Slider;
