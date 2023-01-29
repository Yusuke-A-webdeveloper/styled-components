import styled from 'styled-components';
import { BasicInput, SubmitButton } from '../components/Button';
import { ContactTitle } from '../components/Title';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';

const Contact = () => {
  const { changeTitle } = useGlobalContext();

  useEffect(() => {
    changeTitle('Hair Solon | Contact');
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <ContactTitle>
        <h2>contact us</h2>
      </ContactTitle>
      <form>
        <BasicInput placeholder="first name" />
        <BasicInput placeholder="last name" />
        <BasicInput type="email" placeholder="your email" />
        <BasicInput placeholder="subject here" />
        <textarea></textarea>
        <div className="submit-btn">
          <SubmitButton type="submit" onClick={(e) => e.preventDefault()}>
            submit
          </SubmitButton>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    max-width: 650px;
    margin: 50px auto;
    textarea {
      width: 100%;
      margin: 10px;
      height: 250px;
      padding: 10px;
      font-size: 18px;
      resize: none;
    }
    .submit-btn {
      text-align: center;
    }
  }
  @media (max-width: 930px) {
    form textarea {
      margin: 10px 0;
    }
  }
`;

export default Contact;
