import { HeaderContainer, Logo, ProfilePhoto } from "./styles";
import logoImg from '../../../../assets/logo.png'

export function Header(){
    return(
        <HeaderContainer>
            <Logo source={logoImg}/>
            <ProfilePhoto source={{ uri: 'https://github.com/vinnycosta9898.png'}}/>
        </HeaderContainer>
    )
}