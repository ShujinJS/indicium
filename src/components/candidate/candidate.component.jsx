
import "./candidate.component.style.scss";

import {useNavigate} from "react-router-dom";

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from  "@fortawesome/free-solid-svg-icons";

// Redux
import { connect } from 'react-redux';
import { fetchCandidateDetail} from '../../redux/_actions/candidatesActions';




function Candidate(props){

    let {item, fetchCandidateDetail} = props;

    const navigate = useNavigate();

    const routeChange = () => {
        let path = `/candidates/${item.id}`;
        navigate(path);
    }

    
    function getCandidateDetailClick(){
        fetchCandidateDetail(item.id)
        routeChange();
    }

    return (
        <li className="candidate-card">
            <div className="groups">
                <div className="left-group">
                    <div className="left-group-bg">

                    </div>
                    <div className="img-group" >
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                </div>
                                    
                <div className="info-group">
                    <span className="candidate-name">{item.name}</span>
                        <div className="candidate-phone">{`🕽 ${item.phone}`}</div>
                    <div className="btn-group">
                        <button onClick={getCandidateDetailClick}>Detail</button>
                    </div>
                </div>
            </div>
        </li>         
    )
}

const mapStateToProps = (state) => {
    return {
        candidatesReducer: state.candidatesReducer
    }
}


const mapDispatchToProps = dispatch => {
    return  {
        fetchCandidateDetail: (prop) => dispatch(fetchCandidateDetail(prop))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Candidate);