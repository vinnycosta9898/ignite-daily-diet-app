import { RegularText } from "../../../../components/Typegraphy";
import { EmpytListContainer } from "./styles";

export function EmpytList(){
    return(
        <EmpytListContainer>
            <RegularText color="black" isBold={true}>
                Você  ainda não possui nenhuma refeição cadastrada
            </RegularText>
        </EmpytListContainer>
    )
}