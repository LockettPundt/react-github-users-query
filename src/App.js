import React, { useState } from 'react';
import './App.css';
import UserCardList from './components/UserCardList';
import Form from './components/Form';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import User from './components/User';
import Repos from './components/Repos';

const App = () => {
  
  const [cards, setCards] = useState([]);

  const addNewCard = (cardInfo) => {
    setCards(cards.concat(cardInfo));
  };
  return (
    <div className="App">
      <Router>
        <Route path='/' exact render={ () => {
         return (<>
         <Form onSubmit={addNewCard} />
         <UserCardList cards={cards} />
         </>
         )}
        }
        />
        <Route path='/user/:userName?' exact render={ (props) => <User {...props} /> }/>
      </Router>
    </div>
  );
}

export default App;
