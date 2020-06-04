import React from "react";
import styles from './cardContainer.module.scss';

const CardContainer = (props) => {



  const {cardContainer, show, hide} = styles;
  const { arr, index, onclick} = props;

  return(
    <div className = {cardContainer}>
      { arr.show
        ? <span
            className = {show}>
            {arr.letter}
          </span>
        : <span
            className = {hide}
            onClick={() => {
                onclick(index);
            }}>
          </span>
      }
    </div>
  )
};


export default CardContainer;