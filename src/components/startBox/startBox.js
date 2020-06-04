import React from "react";
import {connect} from "react-redux";
import * as actions from './../../redux/actionCreators'

import styles from './startBox.module.scss';
import SkewButton from "./skewButton/skewButton";
const StartBox = (props) => {

  const {
    start,
    shuffleArrayLetter,
    intervalID,
    gameStarted,
    gameRestarted,
    timeUpdated,
  } = props;

  return(
    <div className={styles.startBox}>
      <SkewButton>
        {
          start
            ? {label:"Restart",onclick:() => { gameRestarted(); clearInterval(intervalID) }}
            : {
                label: "Start", onclick: () => {
                const interval = setInterval(() => {
                  timeUpdated();
                },1000);
                gameStarted(shuffleArrayLetter,interval);
              }
            }
        }
      </SkewButton>
      <br/>
    </div>
  )
};

const mapStateToProps = (state) => {
  return{
    start: state.game.start,
    shuffleArrayLetter :state.arrLetter,
    intervalID:state.intervalID
  }
};


export default connect(mapStateToProps,actions)(StartBox);