import { styled } from "styled-components/native";

export type CircleOptionColorProps = 'green' | 'red'

type OptionButtonProps = {
    id: number
    isActive: boolean
}

type CircleOptionProps = {
    background : CircleOptionColorProps
}

export const OptionButtonContainer = styled.TouchableOpacity<OptionButtonProps>`
    width: 153px;
    height: 50px;
    background-color: ${({ theme, id, isActive }) => isActive && id === 1 ? theme.COLORS.green_500 : isActive && id === 2 ? theme.COLORS.red_500 : theme.COLORS.gray_500};
    border: 1px solid ${({ theme, id, isActive }) => isActive && id === 1 ? theme.COLORS.GREEN_700 : isActive && id === 2 ? theme.COLORS.red_700 : theme.COLORS.gray_500 };
    border-radius: 8px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const CircleOption = styled.View<CircleOptionProps>`
    width: 14px;
    height: 14px;
    background-color: ${({ theme, background }) => background === 'red' ? theme.COLORS.red_700 : theme.COLORS.green_700};
    border-radius: 999px;
    margin-right: 10px;
`