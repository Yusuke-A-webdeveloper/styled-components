import styled from 'styled-components';
import { SocialTitle } from './Title';
import { socialList } from '../data';

const Social = () => {
  return (
    <Wrapper>
      <SocialTitle>
        <h2>check our social media</h2>
      </SocialTitle>
      <ul>
        {socialList.map((list) => {
          const { id, icon, href } = list;
          return (
            <li key={id}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ul {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    li {
      list-style: none;
      a {
        margin: 20px;
        font-size: 35px;
        color: var(--header3);
        transition: 0.3s ease-out;
        &:hover {
          color: var(--white);
        }
      }
    }
  }
  @media (max-width: 415px) {
    h2 {
      font-size: 22px;
    }
    ul li a {
      font-size: 30px;
    }
  }
`;

export default Social;
