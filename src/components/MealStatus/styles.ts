import { styled } from "styled-components/native";

export type MealStatusColorProps = 'green' | 'red' | 'gray'

type MealStatusProps = {
    background : MealStatusColorProps
    width: number
}

export const MealStatusContainer = styled.TouchableOpacity<MealStatusProps>`
    width: ${({ width }) => width}px;
    height: 120px;
    background: ${({ theme, background }) => background === 'green' ? theme.COLORS.green_500 : background === 'red' ?  theme.COLORS.red_500 : theme.COLORS.gray_500};
    border-radius: 8px;
    margin-top: 20px;
    padding: 0 10px;

    flex-direction: column;
    align-items: center;
    
`

export const IconContainer = styled.View`
    width: 100%;
    height: 28px;
    padding: 5px;

    flex-direction: row;
    justify-content: flex-end;
`
