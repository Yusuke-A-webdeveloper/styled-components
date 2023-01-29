import styled from 'styled-components';
import { AboutPageTitle } from '../components/Title';
import aboutMainImg from '../images/about-page.jpg';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';

const About = () => {
  const { changeTitle } = useGlobalContext();

  useEffect(() => {
    changeTitle('Hair Solon | About');
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <AboutPageTitle>
        <h2>about our solon</h2>
      </AboutPageTitle>
      <article>
        <div className="img-con">
          <img src={aboutMainImg} alt="about main" />
        </div>
        <main>
          <h2>sample</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptatibus quo vitae sapiente reiciendis aspernatur sit illo nulla
            quam repellat rem voluptatum delectus inventore, suscipit minima
            porro enim obcaecati incidunt.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            minima animi ratione voluptates alias quibusdam amet earum mollitia
            sunt ipsum reprehenderit vel ut, rerum omnis necessitatibus
            consequatur iusto nobis harum perferendis maxime aspernatur cum
            distinctio. Atque unde nemo quis aliquam, sint nobis a dolorem,
            maiores voluptas consequuntur nulla natus quia.
          </p>
        </main>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  article {
    position: relative;
    margin-top: 50px;
    display: flex;
    .img-con {
      position: relative;
      height: 500px;
      width: 450px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    main {
      max-width: 650px;
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 30px;
      h2 {
        color: var(--header3);
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 20px;
      }
    }
  }
  @media (max-width: 930px) {
    article {
      flex-direction: column;
    }
    article .img-con {
      height: 350px;
      width: 100%;
    }
    article main {
      height: 370px;
    }
  }
  @media (max-width: 415px) {
    article main {
      height: 500px;
    }
    article main h2 {
      font-size: 35px;
    }
  }
`;

export default About;
