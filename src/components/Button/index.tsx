import { useTheme } from "styled-components";
import { RegularText } from "../Typegraphy";
import { ButtonContainer, ButtonColorProps } from "./styles";
import { AntDesign, Feather } from '@expo/vector-icons'; 


type ButtonProps = {
    background: ButtonColorProps
    isIcon?: 'plus' | 'edit-3' | 'trash-2'
    colorTitle: 'black' | 'white'
    title: string
    width: number
    onPress: () => void
}

export function Button({ background, isIcon, colorTitle, title, width, onPress} : ButtonProps){
    const theme = useTheme()
    return(
        <ButtonContainer background={background} width={width} onPress={() => onPress()}>
            { isIcon === 'plus' ? <AntDesign name='plus' color={theme.COLORS.white} size={24}/> : null}
            { isIcon === 'edit-3' ? <Feather name='edit-3' color={theme.COLORS.white} size={24}/> : null}
            { isIcon === 'trash-2' ? <Feather name='trash' color={theme.COLORS.gray_100} size={24}/> : null}
            <RegularText color={colorTitle} isBold={false} style={{ marginLeft: 10}}>{title}</RegularText>
        </ButtonContainer>
    )
}