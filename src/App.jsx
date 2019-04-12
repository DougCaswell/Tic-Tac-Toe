import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      turn: 'X',

    };
  }

  place(index) {
    if (this.state.boxes[index] !== 0) {
      return;
    }
    let update = this.state.boxes;
    update[index] = this.state.turn;
    if (this.state.turn === 'X') {
      this.setState({ boxes: update, turn: 'O' })
    } else {
      this.setState({ boxes: update, turn: 'X' })
    }
    this.checkWinner();
  }

  checkWinner() {
    let game = this.state.boxes;
    if((game[0] === 'X' && game[1] ==='X' && game[2] === 'X') || (game[0] === 'X' && game[3] ==='X' && game[6] === 'X') || (game[0] === 'X' && game[4] ==='X' && game[8] === 'X') || (game[1] === 'X' && game[4] ==='X' && game[7] === 'X') || (game[2] === 'X' && game[5] ==='X' && game[8] === 'X') || (game[2] === 'X' && game[4] ==='X' && game[6] === 'X') || (game[3] === 'X' && game[3] ==='X' && game[5] === 'X') || (game[6] === 'X' && game[7] ==='X' && game[8] === 'X')) {
      alert('X wins!');
      this.clear();
    } else if ((game[0] === 'O' && game[1] ==='O' && game[2] === 'O') || (game[0] === 'O' && game[3] ==='O' && game[6] === 'O') || (game[0] === 'O' && game[4] ==='O' && game[8] === 'O') || (game[1] === 'O' && game[4] ==='O' && game[7] === 'O') || (game[2] === 'O' && game[5] ==='O' && game[8] === 'O') || (game[2] === 'O' && game[4] ==='O' && game[6] === 'O') || (game[3] === 'O' && game[3] ==='O' && game[5] === 'O') || (game[6] === 'O' && game[7] ==='O' && game[8] === 'O')) {
      alert('O wins!');
      this.clear();
    } else if (game[0] && game[1] && game[2] && game[3] && game[4] && game[5] && game[6] && game[7] && game[8]) {
      alert('It\'s a Cat');
      this.clear();
    }
  }

  clear() {
    this.setState({boxes: [0, 0, 0, 0, 0, 0, 0, 0, 0], turn: 'X'})
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Tic-Tac-Toe</h1>
        <div className="container">
          <div className="left divider">
            <div className='box box0' onClick={() => this.place(0)}>
              <h1>{this.state.boxes[0] ? this.state.boxes[0] : ''}</h1>
            </div>
            <div className='box box1' onClick={() => this.place(1)}>
              <h1>{this.state.boxes[1] ? this.state.boxes[1] : ''}</h1>
            </div>
            <div className='box box2' onClick={() => this.place(2)}>
              <h1>{this.state.boxes[2] ? this.state.boxes[2] : ''}</h1>
            </div>
          </div>
          <div className="middle divider">
            <div className='box box3' onClick={() => this.place(3)}>
              <h1>{this.state.boxes[3] ? this.state.boxes[3] : ''}</h1>
            </div>
            <div className='box box4' onClick={() => this.place(4)}>
              <h1>{this.state.boxes[4] ? this.state.boxes[4] : ''}</h1>
            </div>
            <div className='box box5' onClick={() => this.place(5)}>
              <h1>{this.state.boxes[5] ? this.state.boxes[5] : ''}</h1>
            </div>
          </div>
          <div className="right divider">
            <div className='box box6' onClick={() => this.place(6)}>
              <h1>{this.state.boxes[6] ? this.state.boxes[6] : ''}</h1>
            </div>
            <div className='box box7' onClick={() => this.place(7)}>
              <h1>{this.state.boxes[7] ? this.state.boxes[7] : ''}</h1>
            </div>
            <div className='box box8' onClick={() => this.place(8)}>
              <h1>{this.state.boxes[8] ? this.state.boxes[8] : ''}</h1>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className='clear' onClick={() => this.clear()}>New Game</button>
        </div>
      </div>
    );
  }
}

export default App;
