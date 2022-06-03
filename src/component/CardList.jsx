import styled from 'styled-components';
import CardListItem from "./CardListItem";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
  border: 5px solid #9be8d6;
  overflow-y: scroll;
`;

export default function CardList({ cards }) {
  return (
    <StyledSection>
      {cards.map((item) => <CardListItem key={item.src} card={item} />)}
    </StyledSection>
  );
}
