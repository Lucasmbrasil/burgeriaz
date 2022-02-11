import { LeftSectionContainer } from "./style";

const LeftSection = () => {
  return (
    <LeftSectionContainer>
      <h2>OPEN TODAY FOR GREAT FOOD</h2>
      <h1>
        You Can Make Your Own <span>Burguer</span>
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <div className="getStartedButton">
        <p>GET STARTED</p>
      </div>
      <p className="food">FOOD</p>
    </LeftSectionContainer>
  );
};
export default LeftSection;
