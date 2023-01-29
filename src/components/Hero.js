import styled from 'styled-components';
import { DefaultButton } from './Button';

const Hero = () => {
  return (
    <Wrapper>
      <h1>sample hair solon</h1>
      <h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui commodi
        facere dolorem corporis? Eaque error numquam corporis repellendus
        eveniet hic, omnis reiciendis maiores! Ducimus eligendi eos ipsam
        officia recusandae laboriosam.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quo
        fugiat exercitationem praesentium facere quidem officiis perspiciatis
        quae sint accusamus.
      </p>
      <DefaultButton href="#about">read more</DefaultButton>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1000px;
  padding: 0 100px;
  h1 {
    color: var(--header2);
    font-size: 50px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  h2 {
    color: var(--header);
    font-size: 30px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 670px) {
    padding: 0 20px;
  }
  @media (max-width: 415px) {
    h1 {
      font-size: 25px;
    }
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 670px) and (max-height: 415px) {
    h1 {
      font-size: 24px;
      margin-top: 80px;
      margin-bottom: 5px;
    }
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export default Hero;
