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
  matchIndex:null,
  time: 99,
  intervalID:null,
  cardEnableStatus: false
};

const reducer = (state = initialState,
                 action) => {

  switch(action.type) {

    case "GAME_IS_STARTED":
      return {
        ...state,
        arrLetter: action.array,
        game: {...state.game,start:true},
        intervalID: action.intervalID,
        cardEnableStatus: true
      };

    case "GAME_RESTARTED":
      return {
        ...initialState
      };

    case "ENABLE_CLICK":
      return {
        ...state, cardEnableStatus: true
      };

    case "DISABLE_CLICK":
      return {
        ...state, cardEnableStatus: false
      };

    case "ADD_INDEX":
      return {
        ...state,
        matchIndex: action.index
      };

    case "SHOW_CARD":
      return {
        ...state,
        arrLetter: [
          ...state.arrLetter.slice(0,action.index),
          {...state.arrLetter[action.index],show:true},
          ...state.arrLetter.slice(action.index + 1)
        ]
      };

    case "CARD_MATCHED":
      return {
        ...state,
        matchCount: state.matchCount + 1,
        matchIndex: null
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
        matchIndex: null
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