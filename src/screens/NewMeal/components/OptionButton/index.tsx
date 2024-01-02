import { useState } from "react";
import { RegularText } from "../../../../components/Typegraphy";
import { OptionButtonContainer, CircleOption, CircleOptionColorProps } from "./styles";

type OptionButtonProps = {
    background: CircleOptionColorProps
    id: number
    isActive: boolean
    title: 'Sim' | 'Não'
    handleActiveButton: (buttonId: number) => void
}

export function OptionButton({ background, id, isActive, title, handleActiveButton } : OptionButtonProps){
    
    return(
        <OptionButtonContainer id={id} isActive={isActive} onPress={() => handleActiveButton(id)}>
            <CircleOption background={background}/>
            <RegularText color="black" isBold={true}>{title}</RegularText>
        </OptionButtonContainer>
    )
}