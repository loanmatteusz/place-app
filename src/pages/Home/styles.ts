import styled from "styled-components";

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  background-color: ${({ theme }) => theme.colors.gray500};

  padding: 0 20px;
`;

export const FlexGroup = styled.div`
  display: flex;
  padding: 20px;
`;
