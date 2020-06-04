 const gameStarted = (array,intervalID) => {
  array.sort(() => Math.random() - 0.5);
  return{
     type:"GAME_IS_STARTED",
     array,
    intervalID
   }
 };

 const gameRestarted = () => ({type:"GAME_RESTARTED"})

 const clickCard = (index) => {
   return{
     type:"CLICK_CARD",
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

 const timeUpdated = () => ({type:"TIME_UPDATE"});

 const clearArr = () => ({type:"CLEAR_MATCH_ARR"});

 const gameIsFinished = (info) => {
   return{
     type:"GAME_IS_FINISHED",
     info
   }
 };

 export {
   gameStarted,
   gameRestarted,
   clickCard,
   cardMatched,
   cardDontMatched,
   timeUpdated,
   gameIsFinished,
   clearArr
 }

