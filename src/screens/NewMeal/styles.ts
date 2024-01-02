import { styled } from "styled-components/native";

export const NewMealContainer = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
`

export const NewMealHeaderContainer = styled.View`
    width: 100%;
    height: 120px;
    background-color: ${({ theme }) => theme.COLORS.gray_400};
    flex-direction: row;
    align-items: center;

`

export const  BackButton = styled.TouchableOpacity`
    margin: 0 20px;
`       

export const NewMealForm = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.white};
    border-radius: 16px 16px 0 0;

    position: absolute;
    z-index: 1;
    top: 110px;

    flex-direction: column;
    align-items: center;
`
 
export const Row= styled.View`
    width: 327px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`

export const Column = styled.View`
    width: 153px;
    flex-direction: column;
`

export const OptionsButtonsContainer = styled.View`
    width: 327px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`

export const ErrorText = styled.Text`
    color: ${({ theme }) => theme.COLORS.red_700};
    font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
    text-align: center;
`