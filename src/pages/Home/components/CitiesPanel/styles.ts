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
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.darkGraphite};
        border-radius: 10px;
    }
`;


export const EmptyData = styled.div`
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: start;
    font-size: 36px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.brightGrey};
    width: 100%;
    height: 100%;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
`;