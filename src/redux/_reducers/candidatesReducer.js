import * as actionTypes from "../_actions/actionTypes";

let initState = {
    loading: true,
    candidates: [],
    error: "",
    selectedCandidate: undefined
}

export default function candidatesReducer(state = initState, action){

    switch (action.type){
        case actionTypes.ACTION_TYPE_FETCH_CANDIDATES_REQUEST:
            return {
                loading: state.loading = true
            }
        case actionTypes.ACTION_TYPE_FETCH_CANDIDATES_SUCCESS:
            return {
                loading: false,
                candidates: action.payload
            }
        
        case actionTypes.ACTION_TYPE_FETCH_CANDIDATES_FAILURE:
            return {
                loading: false,
                candidates: [],
                error: action.payload
            }
        case actionTypes.ACTION_TYPE_GET_CANDIDATE_DETAIL:
            return {...state, selectedCandidate: action.payload}
        case actionTypes.ACTION_TYPE_CLEAR_CANDIDATE_DETAIL:
            return {...state, selectedCandidate: undefined} 
        default:
            return state;
    }
}