import styled from "styled-components";

export const CollapseListContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0;
    padding: 0 10px;
    font-weight: 900;
    width: 100%;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.darkGraphite};
    border-radius: 5px;
`;

export const Content = styled.div`
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-height: 300px;
    background-color: ${({ theme }) => theme.colors.gray500};

    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const City = styled.p`
    /* font-family: ${({ theme }) => theme.fonts.helvetica}; */
    padding: 5px;
`;
