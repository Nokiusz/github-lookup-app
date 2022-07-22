import styled from "styled-components";
// create styled input which has emoji after element
export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.white};
`;
export const Input = styled.input`
  color: ${({ theme }) => theme.colors.text.black};
  height: 35px;
  text-transform: capitalize;
  outline: none;
  border: none;
  padding: 5px;
`;

export const InputGroup = styled.div`
  display: flex;

  background-color: ${({ theme }) => theme.colors.text.white};
  & svg {
    fill: ${({ theme }) => theme.colors.text.black};
  }
`;
export const IconSpan = styled.span`
  display: flex;
  align-items: center;
  max-height: 35px;
  padding: 5px;
`;
