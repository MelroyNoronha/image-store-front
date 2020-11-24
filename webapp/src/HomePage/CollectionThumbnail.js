import "./CollectionThumbnail.css";
const CollectionThumbnail = (props) => {
  const { image, title, timestamp } = props.data;

  return (
    <div className="collection-thumbnail">
      <div className="image-container">
        <img src={image} alt="thumbnail" />
      </div>

      <div className="thumbnail-details">
        <p>{title}</p>
        <p id="timestamp">{timestamp}</p>
      </div>
    </div>
  );
};

export default CollectionThumbnail;
