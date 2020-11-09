import CollectionThumbnail from "./CollectionThumbnail";

const userCollections = [
  {
    image: "",
    title: "",
    timestamp: "",
  },
  {
    image: "",
    title: "",
    timestamp: "",
  },
  {
    image: "",
    title: "",
    timestamp: "",
  },
];

const HomePage = () => {
  return (
    <div className="">
      {userCollections.map((collection) => (
        <CollectionThumbnail  data={collection} />
      ))}
    </div>
  );
};

export default HomePage;
