import styled from 'styled-components';

export const DefaultButton = styled.a`
  background: transparent;
  display: inline-block;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 8px;
  margin-top: 20px;
  border: none;
  border-bottom: 2px solid var(--header);
  cursor: pointer;
  color: var(--header);
  transition: 0.3s ease-out;
  &:hover {
    opacity: 0.7;
  }
`;

export const SubmitButton = styled.button.attrs((props) => {
  return { type: props.type || 'button' };
})`
  display: inline-block;
  color: var(--header2);
  background: var(--header5);
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 6px 12px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-out;
  &:hover {
    color: var(--header5);
    background: var(--header2);
  }
`;

export const BasicInput = styled.input.attrs((props) => {
  return {
    type: props.type || 'text',
  };
})`
  font-size: 18px;
  padding: 10px;
  width: 100%;
  margin: 10px;
  @media (max-width: 930px) {
    margin: 10px 0;
  }
`;
