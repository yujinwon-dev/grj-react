import { useState } from 'react';
import './App.css';
import CardList from './component/CardList';
import Header from './component/Header';
import Modal from './component/Modal';
import SideBar from './component/Sidebar';

function App() {
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
      <Header/>
      <main>
        <SideBar openModal={() => setIsModalOpen(true)} alcohols={cards} />
        <CardList cards={cards} />
      </main>
      {isModalOpen && <Modal open={isModalOpen} closeModal={() => setIsModalOpen(false)} addItem={item => handleAddItem(item)} />}
    </>
  );
}

export default App;
