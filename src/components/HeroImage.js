import styled from 'styled-components';
import heroImg from '../images/hero.jpg';

const HeroImage = () => {
  return (
    <Wrapper>
      <img src={heroImg} alt="hero" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 60%;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: -1;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
  @media (max-width: 900px) {
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    opacity: 0.5;
  }
`;

export default HeroImage;
