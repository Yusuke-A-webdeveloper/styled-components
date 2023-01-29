import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { ServiceButton } from './Button';

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
            <ServiceButton href={`/service/${id}`} target="_blank">
              see detail
            </ServiceButton>
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
  }
`;

export default Card;
