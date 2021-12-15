import {React, useEffect} from 'react';

// Redux
import { connect } from 'react-redux';
import { fetchCandidates} from '../../redux/_actions/candidatesActions';

// Components
import Candidate from "../../components/candidate/candidate.component"

import "./candidates.page.style.scss";

export const CandidatesPage = (props) => {

    let {candidatesReducer, fetchCandidates} = props;

    useEffect(() => {
        fetchCandidates()
    }, []);

    let candidatesList = candidatesReducer.candidates;

    return (
        <section className="section-holder">
            <div className="candidates-section">

            {candidatesReducer.loading ? (
                <div>
                    Loading...
                </div>
            ) : candidatesReducer. err ? (
                <div>
                    {candidatesReducer.error}
                </div>
            ) : (
                <div className="group-holder">
                    <div className="candidates-nav">
                        <ul>
                            <li className="active-link">Candidates</li>
                            <li>Empty</li>
                            <li>Empty</li>
                        </ul>
                    </div>
                    <div className="section-container">
                        <ul className="candidates-list">
                            {candidatesList.length>0 ? candidatesList.map((item)=>
                                <Candidate key={item.id} item={item}/>
                            ) : ""}
                        </ul>
                    </div>
                </div>
            )}
            </div>
        </section>
    )
}



const mapStateToProps = (state) => {
    return {
        candidatesReducer: state.candidatesReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCandidates: () => dispatch(fetchCandidates())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesPage);