import styled from 'styled-components';
import { DefaultTitle } from './Title';
import aboutImg from '../images/about.jpg';
import { AboutButton } from './Button';

const AboutHome = () => {
  return (
    <Wrapper id="about">
      <DefaultTitle>
        <h2>about us</h2>
      </DefaultTitle>
      <article>
        <div className="img-con">
          <img src={aboutImg} alt="about" />
        </div>
        <main>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quidem officia earum explicabo fugit magnam impedit
            labore repudiandae quasi ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            dignissimos veritatis nostrum hic, rerum obcaecati aliquid neque
            doloribus distinctio earum.
          </p>
          <AboutButton href="/about">learn more</AboutButton>
        </main>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin-top: 100px;
  article {
    height: 550px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    .img-con {
      position: relative;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      border: 4px solid var(--white);
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    main {
      max-width: 650px;
      h2 {
        color: var(--header2);
        font-size: 30px;
        text-transform: capitalize;
        margin-bottom: 20px;
      }
      p {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 900px) {
    min-height: 70vh;
    .img-con {
      display: none;
    }
    article {
      height: 370px;
      grid-template-columns: 1fr;
    }
    main {
      padding: 0 20px;
    }
  }
  @media (max-width: 415px) {
    article main h2 {
      font-size: 18px;
    }
    article main p {
      font-size: 16px;
    }
  }
`;

export default AboutHome;
