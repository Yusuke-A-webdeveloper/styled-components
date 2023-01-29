import { useParams } from 'react-router-dom';
import { serviceList } from '../data';
import styled from 'styled-components';
import { ServiceTitle } from '../components/Title';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';

const SingleService = () => {
  const { serviceId } = useParams();
  const ID = parseInt(serviceId);
  const newItem = serviceList.find((item) => item.id === ID);

  const { changeTitle } = useGlobalContext();
  const { name, duration, price, img, lists, desc } = newItem;

  useEffect(() => {
    changeTitle(`Hair Solon | ${name}`);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <ServiceTitle>
        <h2>{name}</h2>
      </ServiceTitle>
      <article>
        <div className="img-con">
          <img src={img} alt={name} />
        </div>
        <main>
          <h3>
            price : <span>${price}</span>
          </h3>
          <h4>
            duration : <span>{duration} min</span>
          </h4>
          <ul className="list">
            <h5>menu list</h5>
            {lists.map((list, index) => {
              return <li key={index}>{list}</li>;
            })}
          </ul>
          <p>{desc}</p>
        </main>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  article {
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 50px auto;
    .img-con {
      position: relative;
      width: 50%;
      height: 400px;
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
      width: 50%;
      padding: 50px;
      h3 {
        color: var(--header4);
        text-transform: uppercase;
        font-size: 25px;
      }
      h4 {
        color: var(--white);
        text-transform: capitalize;
      }
      .list {
        h5 {
          margin-top: 30px;
          margin-bottom: 20px;
          color: var(--header4);
          font-size: 25px;
          text-transform: uppercase;
        }
        li {
          list-style: none;
          color: var(--white);
          text-transform: capitalize;
          font-size: 20px;
          margin-bottom: 10px;
        }
      }
      p {
        margin-top: 30px;
      }
    }
  }
  @media (max-width: 900px) {
    article {
      justify-content: center;
      flex-direction: column;
    }
    article .img-con {
      position: relative;
      width: 100%;
      height: 400px;
    }
    article main {
      width: auto;
      max-width: 800px;
    }
  }
  @media (max-width: 415px) {
    article main {
      padding: 50px 20px;
    }
  }
`;

export default SingleService;
