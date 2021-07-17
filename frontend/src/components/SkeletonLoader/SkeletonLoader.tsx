import styled, { keyframes } from "styled-components";

interface StyleProps {
  height: string;
  width: string;
  marginTop?: string;
  isCircle?: boolean;
  marginBottom?: string;
  borderRadius?: string;
}

const shimmerAnimationKeyframe = keyframes`
   from{
    left: -200px;
   }
   to {
    left: 100%; 
  }
`;

const StyledSkeleton = styled.div<StyleProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => (props.isCircle ? "50%" : "0px")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0px")};
  overflow: hidden;
  position: relative;
  ::before {
    content: "";
    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 200px;
    background: linear-gradient(
      to right,
      hsla(360, 100%, 100%, 16%) 4%,
      hsla(360, 100%, 100%, 36%) 25%,
      hsla(360, 100%, 100%, 26%) 36%
    );
    animation: ${shimmerAnimationKeyframe} 1.5s ease-in-out infinite;
  }
`;

const SkeletonLoader: React.FC<StyleProps> = ({ height, width, isCircle, marginBottom, marginTop }): JSX.Element => {
  return (
    <StyledSkeleton
      height={height}
      width={width}
      isCircle={isCircle}
      marginBottom={marginBottom}
      marginTop={marginTop}
    />
  );
};

export default SkeletonLoader;
