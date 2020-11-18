// import "./CreateButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'


const CreateButton = () => {
  return (<button>
    <p>Create</p>
      
      <FontAwesomeIcon icon={faCamera} />
      
    </button>
    );
};

export default CreateButton;
