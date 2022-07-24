import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 32px 20px 24px;
  width: 308px;
  height: 54px;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 24px;
  background: red;
  border: none;
`;
