import styled from 'styled-components';
import { ErrorTitle } from '../components/Title';
import errorImg from '../images/error.svg';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';

const Error = () => {
  const { changeTitle } = useGlobalContext();

  useEffect(() => {
    changeTitle('Hair Solon | Error');
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <ErrorTitle>
        <h2>sorry, no page found</h2>
      </ErrorTitle>
      <div className="img-con">
        <img src={errorImg} alt="error" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  .img-con {
    position: relative;
    margin: 50px auto;
    max-width: 550px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default Error;
