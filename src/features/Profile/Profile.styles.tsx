import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: ${({ theme }) => `2px solid ${theme.colors.text.primary}`};
  width: 100px;
  height: 100px;
  aspect-ratio: 1;
`;
