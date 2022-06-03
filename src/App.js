import { useState } from 'react';
import './App.css';
import CardList from './component/CardList';
import Header from './component/Header';
import SideBar from './component/Sidebar';

function App() {
  const [cards, setCards] = useState([
    {
      src: "https://i.pinimg.com/564x/80/e8/66/80e866f6715c5e1b621978735ec3c1ef.jpg",
      alt: "소주 일러스트",
      content: "소주는 너무 써요!",
    },
    {
      src: "https://cdn.webshopapp.com/shops/310202/files/343078254/cherry-chouffe-33cl.jpg",
      alt: "체리 맥주",
      content: "제가 좋아하는 맥주에요. 달고 도수가 센 맥주를 좋아해요.",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/002/503/036/original/flat-wine-claret-glass-bottle-design-style-illustration-drawing-vector.jpg",
      alt: "와인 일러스트",
      content: "최근 들어 와인을 마시기 시작했어요.",
    },
    {
      src: "https://cdn.pixabay.com/photo/2014/09/26/07/35/vodka-461893_960_720.jpg",
      alt: "보드카",
      content: "흠...🤔",
    },
  ]);

  return (
    <>
      <Header />
      <main>
        <SideBar openModal={() => setIsOpen(true)} />
        <CardList cards={cards} />
      </main>
    </>
  );
}

export default App;
