import "./UploadImages.css";

const handleUploadClick = () => {
  const input = document.getElementById("input");
  input.click();
};

const handleUpload = (event) => {
  const input = document.getElementById("input");
  console.log(input.files);
};

const UploadImages = () => {
  return (
    <div id="container" onClick={handleUploadClick}>
      <input
        onChange={handleUpload}
        id="input"
        type="file"
        accept="image/*"
        multiple
      />
      <span>Upload</span>
    </div>
  );
};

export default UploadImages;
