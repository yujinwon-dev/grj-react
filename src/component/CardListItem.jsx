import styled from 'styled-components';

export default function CardListItem({ card }) {
  return (
    <Card>
      <img src={card.src} alt={card.name} />
      <p>{card.content}</p>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 250px;
  background-color: #f5f2b0;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;

  img {
    display: block;
    width: auto;
    max-width: 150px;
    height: 100%;
    overflow: hidden;
  }

  p {
    text-align: center;
  }

  @media screen and (max-width: 1200px) {
    background-color:#a8c6f7;
  }

  @media screen and (max-width: 900px) {
    background-color:#c4a8f7;
  }

  @media screen and (max-width: 600px) {
    background-color:#ccf7c1;
  }
`;
