import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
  }

  body {
    background: #1F1F1F;
    font-size: 16px;
    color: #fff;
  }

  button {
    font-family: 'Mulish', sans-serif;
  }

  #menu-appbar {
    .MuiPaper-root {
      background-color: #242627 !important;
    }
  }

  #plant_object_tooltip {

    .MuiTooltip-tooltip {
      padding: 0;
      width: 150px;
      background-color: ${({ theme }) => theme.colors.blackEerie}
    }

    .MuiTooltip-arrow {
      color: ${({ theme }) => theme.colors.blackEerie}
    }
  }
`;
