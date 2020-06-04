const initialState = {
  arrLetter:[
    {letter:"A",show:false},
    {letter:"A",show:false},
    {letter:"B",show:false},
    {letter:"B",show:false},
    {letter:"V",show:false},
    {letter:"V",show:false},
    {letter:"F",show:false},
    {letter:"F",show:false},
    {letter:"R",show:false},
    {letter:"R",show:false},
    {letter:"T",show:false},
    {letter:"T",show:false},
    {letter:"Y",show:false},
    {letter:"Y",show:false},
    {letter:"O",show:false},
    {letter:"O",show:false},
    {letter:"D",show:false},
    {letter:"D",show:false}
  ],
  game : { start:false, finish:null},
  matchCount:0,
  matchIndexes:[],
  time: 99,
  intervalID:null,
  cardEnableStatus:false
};

const reducer = (state = initialState,
                 action) => {

  switch(action.type) {

    case "GAME_IS_STARTED":
      return {
        ...state,
        arrLetter: action.array,
        game: {start:true,finish:null},
        intervalID: action.intervalID
      };

    case "GAME_RESTARTED":
      return {
        ...initialState
      };

    case "CLICK_CARD":
      return {
        ...state,
        arrLetter: [
          ...state.arrLetter.slice(0,action.index),
          {...state.arrLetter[action.index],show:true},
          ...state.arrLetter.slice(action.index + 1)
        ],
        matchIndexes: [...state.matchIndexes,{ id : action.index }]
      };

    case "CARD_MATCHED":
      return {
        ...state,
        matchCount: state.matchCount + 1,
        matchIndexes: []
      };

    case "CARD_DONT_MATCHED":
      return {
        ...state,
        arrLetter: [
          ...state.arrLetter.slice(0, action.cards[0]),
          {letter:state.arrLetter[action.cards[0]].letter,show:false},
          ...state.arrLetter.slice(action.cards[0] + 1, action.cards[1]),
          {letter:state.arrLetter[action.cards[1]].letter,show:false},
          ...state.arrLetter.slice(action.cards[1] + 1)
        ],
        matchIndexes: [],
      };

    case "TIME_UPDATE":
      return {
        ...state,
        time: state.time - 1
      };

    case "GAME_IS_FINISHED":
      return {
        ...state,game:{...state.game,finish: action.info}
      };

    default:
      return state;

  }
};

export default reducer;