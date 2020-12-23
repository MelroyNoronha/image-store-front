import "./CollectionThumbnail.css";
import { getHumanFriendlyDate } from "../common/functions/humanFriendlyDate";

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
        <p>{title}</p>
        <p id="date">{humanFriendlyDate}</p>
      </div>
    </div>
  );
};

export default CollectionThumbnail;
