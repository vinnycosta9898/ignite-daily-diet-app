import { styled } from "styled-components/native";

export const HomeContainer = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

export const TextContainer = styled.View`
    width: 327px;
    flex-direction: row;
    margin-top: 20px;
`

export const MealGroupTitleContainer = styled.View`
    width: 327px;
    margin-top: 20px;
`

export const MealGroupTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.gray_100};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.lg}px;

`