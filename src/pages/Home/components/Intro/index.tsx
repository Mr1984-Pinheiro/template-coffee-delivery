import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from "../../../../assets/intro-img.png";
import { RegularText } from "../../../../components/Typography";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { defaultTheme } from "../../../../styles/themes/default";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";

export function Intro () {
    const { colors } = defaultTheme
    return(
        <IntroContainer>
                <IntroContent className="container">
                    <div>
                        <section>
                            <IntroTitle className="intro-title" size="xl" >
                                 Encontre o café perfeito para qualquer hora do dia
                            </IntroTitle>
                            <RegularText as="h3" size="l" color="subtitle">
                                Com o Coffee Delivery você recebe seu café onde estiver, a
                                qualquer hora
                            </RegularText>
                        </section>

                        <BenefitsContainer className="benefits-container">
                            <InfoWithIcon
                            iconBg={colors["brand-yellow-dark"]}
                            icon={<ShoppingCart weight="fill" />}
                            text="Compra simples e segura"
                            />
                            <InfoWithIcon
                            iconBg={colors["base-text"]}
                            icon={<Package weight="fill" />}
                            text="Embalagem mantém o café intacto"
                            />
                            <InfoWithIcon
                            iconBg={colors["brand-yellow"]}
                            icon={<Timer weight="fill" />}
                            text="Entrega rápida e rastreada"
                            />
                            <InfoWithIcon
                            iconBg={colors["brand-purple"]}
                            icon={<Coffee weight="fill" />}
                            text="O café chega fresquinho até você"
                            />
                        </BenefitsContainer>
                    </div>
                    <img src={introImg} />
                </IntroContent>
            
        </IntroContainer>
    )
}