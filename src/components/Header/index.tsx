import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from 'phosphor-react' 
import { NavLink } from "react-router-dom";

export function Header(){
    return(
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                     <img src={coffeeLogoImg} alt="" />
                </NavLink>              

                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        São Paulo, SP
                    </HeaderButton>

                    <NavLink  to="/completeOrder">
                        <HeaderButton className='focus:bg-brand-purple focus:text-base-white' variant="yellow">
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                    
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}
