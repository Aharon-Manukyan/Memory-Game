import React from 'react';
import {connect} from 'react-redux';

import styles from './app.module.scss'
import GameBoard from "./components/gameBoard";
import StartBox from "./components/startBox";
import TimeBox from "./components/timeBox";
import PointBox from "./components/pointBox";


function App({finish}) {

  return (
    <div className={styles.app} >
       <h1> Memory Game</h1>
        {
          finish
            ? <div className={styles.finishGame}>
                <span>
                  {finish}
                </span>
              </div>
            : null
        }
       <div className={styles.game}>
         <div className={styles.gameBoard}>
           <GameBoard/>
         </div>
         <div className={styles.tools}>
            <StartBox/>
            <TimeBox/>
            <PointBox/>
         </div>
       </div>
    </div>
  );
}
const mapDispatchToProps = (state) => {
  return{
    finish:state.game.finish
  }
};


export default connect(mapDispatchToProps)(App);
