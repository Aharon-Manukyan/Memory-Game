import React, {useEffect} from "react";
import {connect} from "react-redux";

import * as actions from './../../redux/actionCreators';
import styles from './gameBoard.module.scss';
import CardContainer from "../cardContainer";

const GameBoard = (props) => {

  const {
    state,
    cardShow,
    addIndex,
    cardMatched,
    cardDontMatched,
    enableClick,
    disableClick,
    gameIsFinished,
    gameRestarted
    } = props;

  const {
    arrLetter,
    cardEnableStatus,
    intervalID,
    matchIndex,
    game,
    time,
    matchCount
  } = state;


  useEffect(() =>{
    if(matchCount === 9){
      gameIsFinished(`YOU WON IN   ${ 99 - time } SECONDS` );
      clearInterval(intervalID);
      setTimeout(() => {
        gameRestarted();
      },3000);
    }
    if (time === 0) {

      gameIsFinished("YOU ARE LOST");

      clearInterval(intervalID);

      setTimeout(() => {
        gameRestarted();
      }, 2000)
    }
  });


  const clickCard =  (index) => {
    let card = [matchIndex, index];

    if (matchIndex > index) {
      card = [index, matchIndex];
    }

    if(cardEnableStatus){
      disableClick();
      cardShow(index);

      if (matchIndex !== null) {
        if (arrLetter[matchIndex].letter === arrLetter[index].letter) {
          cardMatched(card);
          enableClick();
        } else {
           setTimeout(() => {
            cardDontMatched(card);
          },1000);
           setTimeout(() => {
             enableClick();
           },1200)
        }
      }else{
        addIndex(index);
        enableClick();
      }
    }

  };

  const arrCard = arrLetter.map((arr,index) => {
    return <CardContainer
                     key        = {index}
                     arr        = {arr}
                     onclick    = {() => clickCard(index)}
       />
   });

  return(
    <div className={styles.gameBoard}>
        { game.start
          ? arrCard
          : <img
            src="https://preview.redd.it/ep860rd7x0b41.png?auto=webp&s=2c616315a5871a90d50b2d90d2f4b835fc6ec770"
            alt = "img" /> }
    </div>
  )
};

const mapStateToProps = (state) => {
  return{
    state:state
  }
};

export default connect(mapStateToProps,actions)(GameBoard);