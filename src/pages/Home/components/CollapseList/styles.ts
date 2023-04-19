import { Collapse } from "@material-ui/core";
import styled from "styled-components";

export const CollapseListContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CollapseBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0;
    padding: 0 10px;
    font-weight: 900;
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.darkGraphite};
    border-radius: 5px;
    color: cyan;
`;

export const Label = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0;
    padding: 0 10px;
    font-weight: 900;
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.darkGraphite};
    border-radius: 5px;
    color: cyan;
`;

export const CustomCollapse = styled(Collapse)``;

export const Content = styled.div`
    margin: 0 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    max-height: 300px;
    background-color: ${({ theme }) => theme.colors.gray500};
    
    overflow-y: scroll;
    margin-bottom: 30px;

    &::-webkit-scrollbar {
        width: 0;
    }

    @media screen and (max-width: 580px) {
        grid-template-columns: 1fr;
    }

    @media screen and (min-width: 581px) and (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const City = styled.p`
    font-family: ${({ theme }) => theme.fonts.mulish};
    font-weight: 500;
    padding: 5px;
`;
