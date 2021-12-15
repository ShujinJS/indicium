import * as actionTypes from "./actionTypes";

const apiBaseUrl = "https://jsonplaceholder.typicode.com";

export const fetchCandidatesRequest = () => {
    return {
        type: actionTypes.ACTION_TYPE_FETCH_CANDIDATES_REQUEST
    };
}

export const fetchCandidatesSuccess = candidates => {
    return {
        type: actionTypes.ACTION_TYPE_FETCH_CANDIDATES_SUCCESS,
        payload: candidates
    }
}

export const fetchCandidatesFailure = error => {
    return {
        type: actionTypes.ACTION_TYPE_FETCH_CANDIDATES_SUCCESS,
        payload: error
    }
}

export const fetchCandidates = () => {


    return (dispatch) => {
        dispatch(fetchCandidatesRequest)
        fetch(`${apiBaseUrl}/users`)
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                const candidates = jsonResponse;
                dispatch(fetchCandidatesSuccess(candidates))
            })
            .catch(function(err){
                console.log(err)
            })
    }   
}

export const getCandidateDetail = selectedCandidate => {
    return {
        type: actionTypes.ACTION_TYPE_GET_CANDIDATE_DETAIL,
        payload: selectedCandidate
    }
}

export const fetchCandidateDetail = myCandidate => {

    return (dispatch) => {
        
        fetch(`${apiBaseUrl}/users/${myCandidate}`)
            .then(function(response){
                return response.json();
            })
            .then(function(jsonResponse){
                const selectedCandidate = jsonResponse;
                dispatch(getCandidateDetail(selectedCandidate))
            })
            .catch(function(err){
                console.log(err)
            })
    }   
}