import { styled } from "styled-components/native";

export type ButtonColorProps = 'black' | 'white'

type ButtonProps = {
    background: ButtonColorProps
    width: number
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
    width: ${({ width }) => width}px;
    height: 50px;
    background-color: ${({ theme, background }) => background === 'black' ? theme.COLORS.gray_100 : theme.COLORS.white};
    border: 1px solid ${({ theme, background }) => background === 'white' ? theme.COLORS.gray_100 : theme.COLORS.white};
    color: ${({ theme, background }) => background === 'white' ? theme.COLORS.gray_100 : theme.COLORS.white};
    border-radius: 8px;
    margin-top: 10px;
    
    flex-direction: row;
    align-items: center;
    justify-content: center;
`