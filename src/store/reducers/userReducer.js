const GET_USER="GET_USER"
const CLEAR="CLEAR"

const initialState = {
  user: {
      question_1:"",
      question_2:"",
      question_3:"",
      question_4:"",
      question_5:"",

  },
  userCount: 0
};

const TestReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_USER:
    

    const local={...state, user:{...state.user,...action.payload}}
    console.log(local)
    return local
      case CLEAR:
         var newState = { ...state }
        newState = { ...newState,user: action.payload }
        console.log(newState,"entered here")
        return newState
    
        case "USER_COUNT":
            return {...state, userCount: state.userCount + 1}

    default:
      return state;
  }
}

export default TestReducer