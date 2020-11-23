import "./UploadOrClick.css"
import UploadImages from './UploadImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const UploadOrClick = (props) => {

  return (
    <div className="container">
        
        <UploadImages />   
        <button className="functional-button">Take Picture</button>

        <div className="back-button" onClick={props.onBack}>
          <FontAwesomeIcon icon={faChevronLeft} id="back-icon"/>
          
          <button className="back-button__button" >Back</button>

        </div>
    </div>
  );
};

export default UploadOrClick;
