import { styled } from "styled-components/native";

export type CircleMealStatusColorProps = 'green' | 'red'

type CircleMealProps = {
    background: CircleMealStatusColorProps
}


export const CircleMealStatusContainer = styled.View<CircleMealProps>`
    width: 14px;
    height: 14px;
    background-color: ${({ theme, background }) => background === 'green' ? theme.COLORS.green_500 : theme.COLORS.red_500};
    border-radius: 999px;
    margin-right: 10px;
`