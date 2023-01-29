import styled from 'styled-components';

export const DefaultTitle = styled.div`
  text-align: center;
  h2 {
    position: relative;
    color: var(--header2);
    font-size: 50px;
    text-transform: uppercase;
    letter-spacing: 1px;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: 150px;
      height: 5px;
      background: var(--header);
    }
  }
  @media (max-width: 415px) {
    h2 {
      font-size: 40px;
    }
  }
`;

export const ServiceTitle = styled(DefaultTitle)`
  margin-top: 100px;
  h2 {
    color: var(--header4);
    &::after {
      background: var(--white);
    }
  }

  @media (max-width: 414px) {
    h2 {
      font-size: 30px;
    }
  }
`;

export const AboutPageTitle = styled(DefaultTitle)`
  h2 {
    color: var(--header3);
    &::after {
      background: var(--white);
    }
  }
  @media (max-width: 415px) {
    h2 {
      font-size: 30px;
    }
  }
`;

export const ErrorTitle = styled(DefaultTitle)`
  margin-top: 100px;
  h2 {
    color: var(--danger);
    &::after {
      background: none;
    }
  }
  @media (max-width: 415px) {
    h2 {
      font-size: 25px;
    }
  }
`;

export const SocialTitle = styled(DefaultTitle)`
  margin-top: 50px;
  h2 {
    color: var(--header3);
    font-size: 25px;
    &::after {
      background: none;
    }
  }
`;

export const ContactTitle = styled(DefaultTitle)`
  margin-top: 100px;
  h2 {
    color: var(--header5);
    &::after {
      background: var(--white);
    }
  }
  @media (max-width: 415px) {
    h2 {
      font-size: 30px;
    }
  }
`;
