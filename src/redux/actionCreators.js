 const gameStarted = (array,intervalID) => {
  array.sort(() => Math.random() - 0.5);
  return{
     type:"GAME_IS_STARTED",
     array,
    intervalID
   }
 };

 const gameRestarted = () => ({type:"GAME_RESTARTED"})

 const cardShow = (index) => {
   return{
     type:"SHOW_CARD",
     index
   }
 };

 const addIndex = (index) => {
   return{
     type:"ADD_INDEX",
     index
   }
 };

 const cardMatched = (cards) => {
   return{
      type:"CARD_MATCHED",
      cards
   }
 };

 const cardDontMatched = (cards) => {
   return{
    type:"CARD_DONT_MATCHED",
    cards
   }
 };

 const enableClick = () => {
   return{
      type:"ENABLE_CLICK"
   }
 };

 const disableClick = () => {
   return{
     type:"DISABLE_CLICK"
   }
 };

 const timeUpdated = () => ({type:"TIME_UPDATE"});

 const gameIsFinished = (info) => {
   return{
     type:"GAME_IS_FINISHED",
     info
   }
 };

 export {
   gameStarted,
   gameRestarted,
   cardShow,
   addIndex,
   cardMatched,
   cardDontMatched,
   enableClick,
   disableClick,
   timeUpdated,
   gameIsFinished
 }

