import "./CreateButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'

const handleCreatePress = () => {
  const fileInput = document.getElementById('file-input');
  fileInput.click();
}

const CreateButton = () => {
  return (
    <button className="button" onClick={handleCreatePress}>
      <FontAwesomeIcon icon={faCamera} id="camera-icon" />
      <p id="button-text">Create</p>
      <input id="file-input" type="file" accept="image/*"/>
    </button>

  );
};

export default CreateButton;