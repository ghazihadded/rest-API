
import {GET_USER,ADD_USER,Delite_USER} from '../actions/const'

const initialState ={
    users:[],
    isLoading:true,
}


const reducer=(state=initialState,action)=>{

    switch (action.type){
        case GET_USER:
            return {...state,users:action.payload,isLoading:false};
            case ADD_USER:
                return {...state,users:[...state.users,action.payload]};
                case Delite_USER:
                    return {...state,users:state.users.filter(user=>user._id!==action.payload)};

            default :
            return state
    }
}


export default reducer