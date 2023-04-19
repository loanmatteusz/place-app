import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const ResponsiveContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    max-width: 768px;
  }
  
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
  }
  
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    max-width: 1200px;
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1440px) {
    max-width: 1440px;
  }
`;
