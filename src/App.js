import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import CardItem from './component/CardItem';
import Modal from './component/Modal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState([
    {
      name: "소주",
      src: "https://i.pinimg.com/564x/80/e8/66/80e866f6715c5e1b621978735ec3c1ef.jpg",
      content: "소주는 너무 써요!",
    },
    {
      name: "맥주",
      src: "https://cdn.webshopapp.com/shops/310202/files/343078254/cherry-chouffe-33cl.jpg",
      content: "제가 좋아하는 맥주에요. 달고 도수가 센 맥주를 좋아해요.",
    },
    {
      name: "와인",
      src: "https://static.vecteezy.com/system/resources/previews/002/503/036/original/flat-wine-claret-glass-bottle-design-style-illustration-drawing-vector.jpg",
      content: "최근 들어 와인을 마시기 시작했어요.",
    },
    {
      name: "보드카",
      src: "https://cdn.pixabay.com/photo/2014/09/26/07/35/vodka-461893_960_720.jpg",
      content: "흠...🤔",
    },
  ]);

  function handleAddItem(item) {
    setCards(prev => [...prev, item]);
  }

  return (
    <>
      <StyledHeader>
        <Title>고량주</Title>
      </StyledHeader>
      <main>
        <StyledAside>
          <AddBtn type="button" onClick={() => setIsModalOpen(true)}>추가</AddBtn>
          <List>
            {cards.map(alcohol => <li key={alcohol.src}>{alcohol.name}</li>)}
          </List>
        </StyledAside>
        <StyledSection>
          {cards.map((item) => <CardItem key={item.src} card={item} />)}
        </StyledSection>
      </main>
      {isModalOpen && <Modal open={isModalOpen} closeModal={() => setIsModalOpen(false)} addItem={item => handleAddItem(item)} />}
    </>
  );
}

const StyledHeader = styled.header`
  border: 5px solid #ff9c33;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff9c33;
`;

const StyledAside = styled.aside`
  min-width: 120px;
  border: 5px solid #5ac766;
  padding: 0.5rem;
  margin-right: 1rem;
`;

const List = styled.ul`
  list-style: none;
  color: #5ac766;
  font-size: 1.5rem;
  padding-left: 0;
`;

const AddBtn = styled.button`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: #5ac766;
  border: 2px solid #5ac766;
  border-radius: 5px;
  padding: 0.2rem 0;
  margin-bottom: 0.5rem;
  cursor: pointer;

  :hover {
    color: #5ac766;
    background: none;
    border: 2px solid #5ac766;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
  border: 5px solid #9be8d6;
  overflow-y: scroll;
`;
