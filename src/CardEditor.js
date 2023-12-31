import React from 'react';
import './CardEditor.css';

import {Link} from 'react-router-dom';

class CardEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { front: 'front1', back: 'back1'},
                { front: 'front2', back: 'back2'},
            ],
            front: '',
            back: '',
        };
    }

    addCard = () => {
        const front = this.state.front.trim();
        const back = this.state.back.trim();
      
        if (front !== "" && back !== "") {
          this.state.addCard({ front, back });
          this.setState({ front: '', back: '' });
        }
      };

    deleteCard = index => this.state.deleteCard(index);

    handleChange = event => 
        this.setState({ [event.target.name]: event.target.value });

    render() {
        const cards = this.state.cards.map((card, index) => {
          return (
            <tr key={index}>
                <td>{card.front}</td>
                <td>{card.back}</td>
                <td>
                    <button onClick={() => this.deleteCard(index)}>Delete card</button>
                </td>
            </tr>
          );
        });

        return (
            <div>
                <h2>Card Editor</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Front</th>
                            <th>Back</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{cards}</tbody>
                </table>
                <br/>
                <input 
                name="front"
                onChange={this.handleChange}
                placeholder="Front of card" 
                value={this.state.front} 
                />
                <input 
                name="back"
                onChange={this.handleChange}
                placeholder="Back of card" 
                value={this.state.back} 
                /> 
                <button onClick={this.addCard}>Add card</button>
                <Link to="/viewer">Go to card viewer</Link>
            </div>
        )
    }
}

export default CardEditor