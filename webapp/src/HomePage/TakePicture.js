import "./TakePicture.css";

const handleUploadClick = () => {
  const input = document.getElementById("input");
  input.click();
};

const handleUpload = (event) => {
  const input = document.getElementById("input");
  console.log(input.files);
};

const TakePicture = () => {
  return (
    <div id="container" onClick={handleUploadClick}>
      <input
        onChange={handleUpload}
        id="input"
        type="file"
        accept="image/*;capture=camera"
        multiple
      />
      <span>Take Picture</span>
    </div>
  );
};

export default TakePicture;
