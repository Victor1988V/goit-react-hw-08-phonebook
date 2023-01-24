import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-top: 10px;
  color: var(--secondaryTextColor);
  font-weight: 500;
  font-size: 18px;
`;
export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 10px;
  width: 50%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;

  &:focus {
    outline-color: var(--accentColor);
  }

  &:hover {
    border: 1px solid var(--accentColor);
  }
`;
