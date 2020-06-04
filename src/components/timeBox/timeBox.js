import React from "react";
import {connect} from 'react-redux';

import styles from './timeBox.module.scss';

const TimeBox = ({time}) => {



  return(
    <div className={styles.timeBox}>
      <div className={styles.circle}>
          <div>
            <span className={styles.time}>Time</span>
            <span className={styles.timeCount}>
              {time < 10 ? '0' + time : time}
            </span>
          </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return{
    time:state.time
  }
};


export default connect(mapStateToProps)(TimeBox);