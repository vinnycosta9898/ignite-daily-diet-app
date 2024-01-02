import { styled } from "styled-components/native";

export type MealHeaderColorProps = 'green' | 'red'

type MealHeaderProps = {
    background: MealHeaderColorProps
}

export const MealContainer = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
`

export const MealHeaderContainer = styled.View<MealHeaderProps>`
    width: 100%;
    height: 120px;
    background-color: ${({ theme, background }) => background === 'green' ? theme.COLORS.green_500 : theme.COLORS.red_500};

    flex-direction: row;
    align-items: center;
`

export const BackButton = styled.TouchableOpacity`
    margin-left: 20px;
`

export const MealContent = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.white};
    flex-direction: column;
    align-items: flex-start;

    position: absolute;
    top: 90px;
    border-radius: 16px 16px 0 0;
`

export const MealContentPad = styled.View`
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
`

export const ButtonContainer = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 250px;
`