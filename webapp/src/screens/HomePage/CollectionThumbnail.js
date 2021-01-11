import "./CollectionThumbnail.css";
import deleteCollection from "../../common/functions/deleteCollection";
import { getHumanFriendlyDate } from "../../common/functions/humanFriendlyDate";
import { useHistory } from "react-router-dom";
import cancelIcon from "../../assets/icons/cross-dark.svg";
import editIcon from "../../assets/icons/edit-dark.svg";
import cloudIcon from "../../assets/icons/cloud-dark.svg";

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

  const handleEditClick = () => {
    history.push("/edit", {
      data: props.data,
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

        <div id="icons">
          <img
            src={cancelIcon}
            onClick={handleDeletePress}
            className="delete-icon"
            alt="delete icon"
          />

          <img
            src={cloudIcon}
            onClick={() => {}}
            className="cloud-icon"
            alt="cloud icon"
          />

          <img
            src={editIcon}
            onClick={handleEditClick}
            className="edit-icon"
            alt="edit icon"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionThumbnail;
