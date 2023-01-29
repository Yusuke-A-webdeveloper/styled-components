import styled from 'styled-components';
import { DefaultTitle } from './Title';
import serviceImg from '../images/service.jpg';
import Card from './Card';

const Services = () => {
  return (
    <Wrapper>
      <DefaultTitle>
        <h2>our services</h2>
      </DefaultTitle>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          voluptas rerum voluptatum error dolorem sunt illum dolor ratione quae
          cum eveniet maxime tenetur, nam autem fuga qui, harum debitis quisquam
          excepturi nostrum hic repudiandae? Cupiditate dignissimos eius tempore
          repudiandae commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          fugiat inventore error iure exercitationem dignissimos iste
          perferendis, in facilis accusamus laborum magnam hic! Quos obcaecati
          repellendus deleniti impedit dolores pariatur.
        </p>
      </div>
      <article>
        <Card />
        <div className="img-con">
          <img src={serviceImg} alt="service" />
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin-bottom: 100px;
  .text {
    max-width: 800px;
    margin: 60px auto 0;
    p {
      margin-bottom: 20px;
      font-size: 18px;
    }
  }
  article {
    position: relative;
    width: 100%;
    height: 600px;
    margin-top: 100px;
    display: flex;
    .img-con {
      position: relative;
      width: 50%;
      height: 100%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 900px) {
    .text {
      padding: 0 20px;
    }
    article {
      height: auto;
      flex-direction: column-reverse;
    }
    article .img-con {
      width: 100%;
      height: 400px;
    }
    article main {
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 415px) {
    .text p {
      font-size: 16px;
    }
  }
`;

export default Services;
