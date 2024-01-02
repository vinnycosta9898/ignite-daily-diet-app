import { styled } from "styled-components/native";

export const ModalConfirmContainer = styled.View`
    width: 327px;
    height: 192px;
    background-color: ${({ theme }) => theme.COLORS.white};
    border: 1px solid black;
    border-radius: 8px;
    padding: 0 20px;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 2;
    top: 250px;
    
`

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
`