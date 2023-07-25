import { CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";
import { RegularText, TitleText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../utils/formatMoney";

export interface Coffee {
    id: number;
    tags: string[]; 
    name: string
    description: string;
    photo: string;
    price: number;
} 

interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCard( {coffee}: CoffeeProps ) {
    const formattedPrice = formatMoney(coffee.price)
    return(
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />

            <Tags>
                {coffee.tags.map((tag) =>(
                     <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}              
                
            </Tags>

            <Name>
                {coffee.name}
            </Name>

            <Description>
                {coffee.description}
            </Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong" >{formattedPrice}</TitleText>
                </div>

                <div className="w-[7.5rem]">
                    <QuantityInput />
                    <button className="w-[2.375rem] h-[2.375rem] border-0 flex items-center justify-center bg-brand-purple-dark text-base-card rounded-md ml-[0.3rem] duration-[0.4s] hover:bg-brand-purple">
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </CardFooter>
            
        </CoffeeCardContainer>
    )
}