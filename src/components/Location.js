import styled from 'styled-components';
import { DefaultTitle } from './Title';
import { BsMap, BsFillTelephonePlusFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Social from './Social';

const Location = () => {
  return (
    <Wrapper>
      <DefaultTitle>
        <h2>location</h2>
      </DefaultTitle>
      <article>
        <div className="map">
          <BsMap />
          <p>1234 west 10th avenue, vancouver</p>
        </div>
        <div className="phone">
          <BsFillTelephonePlusFill />
          <p>123 456 7890</p>
        </div>
        <div className="email">
          <AiOutlineMail />
          <p>samplehair@gmail.com</p>
        </div>
      </article>
      <Social />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  article {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    .map,
    .phone,
    .email {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      svg {
        position: relative;
        top: 3px;
        font-size: 25px;
        color: var(--header3);
        margin-right: 20px;
      }
      p {
        font-size: 22px;
      }
    }
    .map p {
      text-transform: capitalize;
    }
  }
  @media (max-width: 415px) {
    article .map svg,
    .iWuJjs article .phone svg,
    .iWuJjs article .email svg {
      font-size: 20px;
    }
    article .map p,
    .kZgMIa article .phone p,
    .kZgMIa article .email p {
      font-size: 18px;
    }
  }
`;

export default Location;
