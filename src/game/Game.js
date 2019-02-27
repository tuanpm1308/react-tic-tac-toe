import React, { Component } from "react";
import { connect } from "react-redux";
import SideChooser from "./SideChooser";
import Board from "./Board";
import xImage from "../images/x.png";
import oImage from "../images/o.png";

export class Game extends Component {
  render() {
    return (
      <div className="game-wrap">
        <SideChooser />

        <div className="status">
          <div className="status-o">
            <span className="win-counter">{this.props.oWin} {this.props.oWin < 2 ? 'win' : 'wins'}</span>
          </div>
          <div className="status-x">
            <span className="win-counter">{this.props.xWin} {this.props.xWin < 2 ? 'win' : 'wins'}</span>
          </div>
          <div className="status-d">
            <span className="win-counter">{this.props.draw} {this.props.draw < 2 ? 'draw' : 'draws'}</span>
          </div>
        </div>
        <Board />

        <div className="move-status-wrap">
          <div className="move-status">
            <span className={'x-move' + (this.props.isXMove && !this.props.isGameEnd ? ' active' : '')}>
              <img src={xImage} alt="x" />
            </span>
            <span className={'o-move' + (!this.props.isXMove && !this.props.isGameEnd ? ' active' : '')}>
              <img src={oImage} alt="o" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xWin: state.xWin,
    oWin: state.oWin,
    draw: state.draw,
    isXMove: state.isXMove,
    isGameEnd: state.isGameEnd
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
