import { styled } from "styled-components";
import introBackgroundImg from "../../../../assets/intro-background.png"
import { rgba } from "polished";
import { TitleText } from "../../../../components/Typography";

export const IntroContainer = styled.section`
  width: 100%;
  /* height: 34rem;  */
  padding: 3rem 0;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 490px) {
    .intro-title {
      font-size: 2.5rem;
    }
  }
`;

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media only screen and (max-width: 984px) {
    flex-direction: column;   

    img {
      width: 60%;      
    }
}
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 0.5rem;
  margin-top: 4.125rem;

  @media only screen and (max-width: 490px) {
    grid-template-columns: 1fr;
  }
`;