const CollectionThumbnail = (props) => {
  const { image, title, timestamp } = props.data;

  return (
    <div className="">
      <img src={image} />
      <p>{title}</p>
      <p>{timestamp}</p>
    </div>
  );
};

export default CollectionThumbnail;
