import { getHumanFriendlyDate } from "../../../common/functions/humanFriendlyDate";
import { useHistory } from "react-router-dom";
import deleteCollection from "../../../common/functions/deleteCollection";
import cancelIcon from "../../../assets/icons/cross-dark.svg";
import editIcon from "../../../assets/icons/edit-dark.svg";
import cloudIcon from "../../../assets/icons/cloud-dark.svg";
import styles from "./index.module.css";

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
    <div className={styles.collectionThumbnail}>
      <div className={styles.imageContainer} onClick={handleImageClick}>
        <img src={thumbnail.dataURL} alt="thumbnail" />
      </div>

      <div className={styles.thumbnailDetails}>
        <div className={styles.details}>
          <p>{title}</p>
          <p className={styles.date}>{humanFriendlyDate}</p>
        </div>

        <div className={styles.icons}>
          <img
            src={cancelIcon}
            onClick={handleDeletePress}
            className={styles.deleteIcon}
            alt="delete icon"
          />

          <img
            src={cloudIcon}
            onClick={() => {}}
            className={styles.cloudIcon}
            alt="cloud icon"
          />

          <img
            src={editIcon}
            onClick={handleEditClick}
            className={styles.editIcon}
            alt="edit icon"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionThumbnail;
