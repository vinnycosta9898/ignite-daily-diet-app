import { CircleMealStatus } from "../../../../components/CircleMealStatus";
import { RegularText } from "../../../../components/Typegraphy";
import { DietCardBackgroundProps, DietCardContainer } from "./styles";

type DietCardProps = {
    background: DietCardBackgroundProps
}

export function DietCard({ background } : DietCardProps){
    return(
        <DietCardContainer>
            <CircleMealStatus background={background}/>
            <RegularText color="black" isBold={false}>{background === 'green' ? "Dentro da Dieta" : "Fora da Dieta"}</RegularText>
        </DietCardContainer>
    )
}