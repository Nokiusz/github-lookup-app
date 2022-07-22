import styled from "styled-components";

export const Container = styled.div`
  max-width: 350px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid white;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: ${({ theme }) => `2px solid ${theme.colors.text.primary}`};
  height: 200px;
  aspect-ratio: 1;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: 400;
  font-size: 17px;
  margin: 0;
`;

export const Followers = styled(Section)``;

export const Location = styled(Section)``;
export const Company = styled(Section)``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: 0.74px;
  margin-bottom: 0px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: 400;
  font-size: 17px;
  margin: 0;
`;

export const SecondaryText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 400;
  font-size: 17px;
  margin: 0;
`;
