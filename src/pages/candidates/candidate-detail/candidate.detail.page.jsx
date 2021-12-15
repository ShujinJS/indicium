// Redux
import { connect } from 'react-redux';

import "./candidate.detail.page.style.scss";

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhoneVolume, faEnvelope, faGlobe, faHandshake } from  "@fortawesome/free-solid-svg-icons";

function CandidateDetail(props){

    let {candidatesReducer} = props;


    let {selectedCandidate} = candidatesReducer;

    return (
        
        <div className="detail-holder">
           
            
           {!selectedCandidate ? "loading..." : (
                <>
                    <div className="top-bg">

                    </div>
                    <div className="middle-bg">
                        <div className="user-details-card">
                            <div className="start-bg">
                                <FontAwesomeIcon icon={faHandshake}/>
                            </div>
                            <div className="user-info">
                                <span className="info-header">Contact Informations</span>
                                <div className="info-holder">
                                    
                                    <ul className="tag-holder">
                                        <li className="info-tag">
                                            <FontAwesomeIcon icon={faPhoneVolume}/>
                                            <span className="info-tag">Phone number:</span>
                                        </li>
                                        <li className="info-tag">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                            <span className="info-tag">Email address:</span>
                                        </li>
                                        <li className="info-tag">
                                            <FontAwesomeIcon icon={faGlobe}/>
                                            <span className="info-tag">Website:</span>
                                        </li>
                                    </ul>
                                    <ul className="info-list">
                                        <li className="info-item">
                                            <span>{selectedCandidate.phone}</span> 
                                        </li>
                                        <li className="info-item">
                                            {selectedCandidate.email}
                                        </li>
                                        <li className="info-item">
                                            {selectedCandidate.website}
                                        </li>
                                    </ul>
                                    
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="user-top-holder">
                        <div className="user-avatar">
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div className="user-name">
                            {selectedCandidate.name}
                        </div>
                    </div>

                </>
            )}

        </div>

        
    )
}



const mapStateToProps = (state) => {
    return {
        candidatesReducer: state.candidatesReducer
    }
}

export default connect(mapStateToProps)(CandidateDetail);
