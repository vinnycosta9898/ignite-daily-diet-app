import { styled } from "styled-components/native";

export type DietCardBackgroundProps = 'green' | 'red'

export const DietCardContainer = styled.View`
    width: 156px;
    height: 40px;
    background-color: ${({ theme }) => theme.COLORS.gray_500};
    border-radius: 16px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`