import "./CollectionThumbnail.css"
const CollectionThumbnail = (props) => {
  const { image, title, timestamp } = props.data;

  return (
    <div className="collection-thumbnail">
      <div className="image-container">
        <img src={image} alt="thumbnail"/>
      </div>

      <p>{title}</p>
      <p>{timestamp}</p>
    </div>
  );
};

export default CollectionThumbnail;
