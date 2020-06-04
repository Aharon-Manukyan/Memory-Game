import React, {useEffect} from "react";
import {connect} from "react-redux";

import * as actions from './../../redux/actionCreators';
import styles from './gameBoard.module.scss';
import CardContainer from "../cardContainer";

const GameBoard = (props) => {

  const {
    state,
    clickCard,
    cardMatched,
    cardDontMatched,
    gameIsFinished,
    gameRestarted,
    clearArr
  } = props;

  const {
    arrLetter,
    time,
    intervalID,
    matchCount,
    matchIndexes,
    game
  } = state;


  useEffect(() => {

    if(matchIndexes.length === 2) {
      matchCard(matchIndexes[0].id, matchIndexes[1].id);

    }

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

  const matchCard = (i,j) => {

    let cards = [i,j];

    if( i > j ){
      cards = [j,i];
    }

    if(arrLetter[i].letter === arrLetter[j].letter){
      cardMatched(cards);
      clearArr();
    }else{
      setTimeout( () => {
        cardDontMatched(cards);
      },350);
    }

  };



  const arrCard = arrLetter.map((letter,index) => {
     return <CardContainer
                     key        = {index}
                     arr        = {letter}
                     onclick    = {matchIndexes.length === 2 ? console.log :clickCard}
                     index      = {index}
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