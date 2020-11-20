import "./CreateButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'


const CreateButton = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      <FontAwesomeIcon icon={faCamera} id="camera-icon"/>
      <p id="button-text">Create</p>
      </button>
    );
};

export default CreateButton;
