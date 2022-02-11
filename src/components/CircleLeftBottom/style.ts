import styled from "styled-components";

export const CircleLeftBottomStyle = styled.div`
  width: 614px;
  height: 614px;
  background-color: #ffffff;
  position: absolute;
  left: -324px;
  top: 85vh;
  border-radius: 50%;
  z-index: -1;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.02));
  @media screen and (max-width: 600px) {
    /* display: none; */
  }
`;
