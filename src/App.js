import React from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
import HomePage from './HomePage';

import {Routes, Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  addCard = card => {
    const cards = this.state.cards.slice().concat(card);
    this.setState({ cards });
  };

  deleteCard = index => {
    const cards = this.state.cards.slice();
    cards.splice(index, 1);
    this.setState({ cards })
  };

  render() {
    return (
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/editor" element={<CardEditor 
            addCard={this.addCard} 
            cards={this.state.cards} 
            deleteCard={this.deleteCard} 
          />}/>
        <Route exact path="/viewer/:deckId" element={<CardViewer 
          />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
}

function Home() {
  return (
    <div>Page not found!</div>
  );
}


export default App;
