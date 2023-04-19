import styled from "styled-components";

export const SelectorContent = styled.select`
    padding: 0 10px;
    width: 70px;
    height: 50px;
    
    &:focus {
        outline: none;
    }
`;

export const Option = styled.option`
    width: 100%;
    font-size: 18px;
`;
