import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;  
`;

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));//grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`;