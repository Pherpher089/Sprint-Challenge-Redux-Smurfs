/*
  Be sure to import in all of the action types from `../actions`
*/
import {GET_SMURF, SUCCESS, FAILURE, ADD_SMURF} from '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initalState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initalState, action) => {
  switch(action.type){
    case GET_SMURF:
      return{
        ...state,
        fetchingSmurfs: true
      }
    case SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false
      }
    case FAILURE:
      return{
        ...state,
        error: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false
      }
      case ADD_SMURF:
        return {
          ...state,
          addingSmurf: true
        }
    default:
      return state;
  }
}
