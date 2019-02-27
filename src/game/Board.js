import React, { Component } from "react";
import { connect } from "react-redux";
import Square from "./Square";
import { increaseOWinCounter, increaseXWinCounter, increaseDrawCounter, move, newGame } from "../redux/actionCreators";

export class Board extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  canculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return squares.filter(square => square === null).length === 0;
  }

  getWinningLine(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return a + '-' + c;
      }
    }

    return false;
  }

  handleClick(i) {
    if (this.props.isGameEnd) {
      return;
    }

    const squares = this.props.squares.slice();

    if (squares[i] === null) {
      squares[i] = this.props.isXMove ? 'x' : 'o';

      const winner = this.canculateWinner(squares);

      if (winner) {
        this.timmer = setTimeout(() => this.props.newGame(), 2000);

        this.props.setCounterStatus(winner);
      }

      this.props.move(squares);
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    let winningLineClass = '';

    if (this.props.isGameEnd) {
      const dir = this.getWinningLine(this.props.squares);

      if (dir) {
        winningLineClass = ' winning-line-wrap-' + dir;
      }
    }

    return (
      <div className="board-wrap">
        <div className={'winning-line-wrap' + winningLineClass}>
          <div className="winning-line"></div>
        </div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    squares: state.squares,
    isXMove: state.isXMove,
    isGameEnd: state.isGameEnd
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    move: (squares) => {
      dispatch(move(squares));
    },

    setCounterStatus: (winner) => {
      switch (winner) {
        case 'o':
          dispatch(increaseOWinCounter());
          break;
        case 'x':
          dispatch(increaseXWinCounter());
          break;
        default:
          dispatch(increaseDrawCounter());
          break;
      }
    },

    newGame: () => {
      dispatch(newGame());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
