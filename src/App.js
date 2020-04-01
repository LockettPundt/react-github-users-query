import React, { useState } from 'react';
import './App.css';
import UserCardList from './components/UserCardList';
import Form from './components/Form';
function App() {
  
  const [cards, setCards] = useState([]);

  const addNewCard = (cardInfo) => {
    setCards(cards.concat(cardInfo));
  };
  return (
    <div className="App">
      <p>Github Profiles</p>
      <Form onSubmit={addNewCard}/>
      <UserCardList cards={cards} />
    </div>
  );
}

export default App;
