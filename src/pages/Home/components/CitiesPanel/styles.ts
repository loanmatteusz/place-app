import styled from "styled-components";

export const CitiesPanelContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    width: 100%;
    height: 100vh;
    font-size: 18px;

    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 5px;
        height: 100%;
    }
`;
