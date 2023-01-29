import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Card = () => {
  const { menu } = useGlobalContext();

  return (
    <Wrapper className="card-container">
      {menu.map((list) => {
        const { id, icon, name } = list;
        return (
          <div className="single-service" key={id}>
            <div className="icon-con">{icon}</div>
            <h3>{name}</h3>
            <Link
              to={`/service/${id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              see detail
            </Link>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  .single-service {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    .icon-con {
      margin-bottom: 10px;
      svg {
        font-size: 70px;
        color: var(--header2);
      }
    }
    h3 {
      font-size: 25px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--header3);
    }
    a {
      background: transparent;
      display: inline-block;
      font-size: 18px;
      text-decoration: none;
      letter-spacing: 1px;
      margin-top: 20px;
      cursor: pointer;
      transition: 0.3s ease-out;
      padding: 4px 10px;
      color: var(--white);
      border: 2px solid var(--white);
      text-transform: capitalize;
      &:hover {
        color: var(--header3);
        border: 2px solid var(--header3);
      }
    }
  }
`;

export default Card;
