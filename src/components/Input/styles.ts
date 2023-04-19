import styled from "styled-components";

export const InputContent = styled.input`
    padding: 0 10px;
    width: 200px;
    height: 50px;
    font-size: 18px;

    border: none;
    background-color: ${({ theme }) => theme.colors.lightGraphite};
    color: white;

    &:focus {
        outline: none;
    }
`;
