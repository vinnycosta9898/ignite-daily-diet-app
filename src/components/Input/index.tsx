import { InputContainer } from "./styles";

type InputProps = {
    width: number
    height: number
    onChangeText: () => void
}


export function Input({ width , height, onChangeText } : InputProps){
    return(
        <InputContainer width={width} height={height} onChangeText={onChangeText}>
        
        </InputContainer>
    )
}