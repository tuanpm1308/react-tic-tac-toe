import React, { Component } from "react";
import { connect } from "react-redux";
import { setFirstPlayer } from "../redux/actionCreators";

export class SideChooser extends Component {
  render() {
    return (
      <div className={'side-chooser-wrap' + (this.props.isNewGame ? '' : ' inactive')}>
        <h1>Which side do you choose?</h1>
        <div className="side-chooser">
          <button className="side-o" onClick={() => this.props.chooseSide('o')}></button>
          <span>or</span>
          <button className="side-x" onClick={() => this.props.chooseSide('x')}></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isNewGame: state.isNewGame
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseSide: (side) => dispatch(setFirstPlayer(side === 'x'))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideChooser);
