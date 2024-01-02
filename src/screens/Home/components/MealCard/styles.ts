import { styled } from "styled-components/native";

export const MealCardContainer = styled.TouchableOpacity`
    width: 327px;
    height: 50px;
    background-color: ${({ theme }) => theme.COLORS.white};
    border: 1px solid ${({ theme }) => theme.COLORS.gray_500};
    border-radius: 8px;
    padding: 0 20px;
    margin-top: 10px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const MealContent = styled.View`
    flex-direction: row;
`
export const  MealHour = styled.Text`

`
export const  Separator = styled.View`
    width: 1px;
    height: 16px;
    background-color: ${({ theme }) => theme.COLORS.gray_400};
    margin: 0 5px;
`
export const  MealName = styled.Text`

`
