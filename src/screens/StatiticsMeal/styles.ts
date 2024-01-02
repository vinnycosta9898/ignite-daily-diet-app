import { styled } from "styled-components/native";

export type StatitcicsMealHeaderColorProps = 'green' | 'red'

type StatiticsMealHeaderProps = {
    background : StatitcicsMealHeaderColorProps
}

export const StatiticsMealContainer = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
`

export const StatiticsMealHeader = styled.View<StatiticsMealHeaderProps>`
    width: 100%;
    height: 180px;
    background-color: ${({ theme, background }) => background === 'green' ? theme.COLORS.green_500 : theme.COLORS.red_500};
`
export const ButtonContainer = styled.View`
    width: 100%;
    padding: 20px;
`

export const  BackButton = styled.TouchableOpacity`

`

export const StatiticsMain = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 1;
    background-color: ${({ theme }) => theme.COLORS.white};
    border-radius: 16px 16px 0 0;
    top: 170px;
`

export const Row = styled.View`
    width: 327px;
    flex-direction: row;
    justify-content: space-between;
`

