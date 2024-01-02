import { CircleMealStatusColorProps, CircleMealStatusContainer } from "./styles";

type CircleMealProps = {
    background: CircleMealStatusColorProps
}

export function CircleMealStatus({ background } : CircleMealProps){
    return(
        <CircleMealStatusContainer background={background}>
            
        </CircleMealStatusContainer>
    )
}