import React from 'react';
import './CardViewer.css';

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentCardIndex: 0,
          isFrontVisible: true,
        };
    }

    flipCard = () => {
        this.setState((prevState) => ({
          isFrontVisible: !prevState.isFrontVisible,
        }));
      };
    
      nextCard = () => {
        this.setState((prevState) => {
          const nextIndex = prevState.currentCardIndex + 1;
          return {
            currentCardIndex: nextIndex >= this.props.cards.length ? prevState.currentCardIndex : nextIndex,
            isFrontVisible: true,
          };
        });
      };
    
      previousCard = () => {
        this.setState((prevState) => {
          const previousIndex = prevState.currentCardIndex - 1;
          return {
            currentCardIndex: previousIndex < 0 ? prevState.currentCardIndex : previousIndex,
            isFrontVisible: true,
          };
        });
      };

    render() {
        const { currentCardIndex, isFrontVisible } = this.state;
        const card = this.props.cards[currentCardIndex];

        return (
            <div>
                <h2>Card Viewer</h2>
                <div className="flashcard" onClick={this.flipCard}>
                    {isFrontVisible ? <div className="front">{card.front}</div>
                     : <div className="back">{card.back}</div>}
                </div>
                <div className="progress-bar">
                    <span>Card {currentCardIndex + 1} of {this.props.cards.length}</span>
                    <button onClick={this.previousCard}>Previous Card</button>
                    <button onClick={this.nextCard}>Next Card</button>
                </div>
                <hr />
                <button onClick={this.props.switchMode}>Go to card editor</button>
            </div>
        )
    }
}

export default CardViewer;