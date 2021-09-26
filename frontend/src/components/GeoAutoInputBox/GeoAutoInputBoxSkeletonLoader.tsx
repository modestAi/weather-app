import styled from "styled-components";
import { ContainerDiv } from "./GeoAutoInputBox.style";

const ExtraSpace = styled.div`
  height: 1.5rem;
`;

const GeoAutoInputBoxSkeletonLoader = (): JSX.Element => {
  return (
    <ContainerDiv width={"60vw"}>
      <ExtraSpace />
    </ContainerDiv>
  );
};

export default GeoAutoInputBoxSkeletonLoader;
