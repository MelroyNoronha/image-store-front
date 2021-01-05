import "./CollectionThumbnail.css";
import { getHumanFriendlyDate } from "../common/functions/humanFriendlyDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CollectionThumbnail = (props) => {
  const { images, title, date } = props.data;
  const thumbnail = images[0];
  const humanFriendlyDate = getHumanFriendlyDate(new Date(date));
  return (
    <div className="collection-thumbnail">
      <div className="image-container">
        <img src={thumbnail.dataURL} alt="thumbnail" />
      </div>

      <div className="thumbnail-details">
        <div className="details">
          <p>{title}</p>
          <p id="date">{humanFriendlyDate}</p>
        </div>
        <FontAwesomeIcon icon={faTimes} className="delete-icon" />
      </div>
    </div>
  );
};

export default CollectionThumbnail;
