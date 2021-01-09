import "./CollectionThumbnail.css";
import deleteCollection from "../../common/functions/deleteCollection";
import { getHumanFriendlyDate } from "../../common/functions/humanFriendlyDate";
import { useHistory } from "react-router-dom";
import cancelIcon from "../../assets/icons/cross-dark.svg";

const CollectionThumbnail = (props) => {
  const history = useHistory();

  const { images, title, date, id } = props.data;
  const thumbnail = images[0];
  const humanFriendlyDate = getHumanFriendlyDate(new Date(date));
  const handleDeletePress = () => {
    const confirmDelete = window.confirm(
      `are you sure you want to delete ${title}?`
    );
    if (confirmDelete) {
      deleteCollection(id);
    }
  };

  const handleImageClick = () => {
    history.push("/view", {
      images,
    });
  };

  return (
    <div className="collection-thumbnail">
      <div className="image-container" onClick={handleImageClick}>
        <img src={thumbnail.dataURL} alt="thumbnail" />
      </div>

      <div className="thumbnail-details">
        <div className="details">
          <p>{title}</p>
          <p id="date">{humanFriendlyDate}</p>
        </div>

        <img
          src={cancelIcon}
          onClick={handleDeletePress}
          className="delete-icon"
          alt="delete icon"
        />
      </div>
    </div>
  );
};

export default CollectionThumbnail;
