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
  return (
    <div>
      <SimpleImageSlider
        bgColor="#ffffff"
        slideDuration={1}
        width={500}
        height={425}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
      />
    </div>
  );
};
export default Slider;
