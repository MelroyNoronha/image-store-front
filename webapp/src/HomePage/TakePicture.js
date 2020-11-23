import "./TakePicture.css"


const handleUploadClick = () => {
  const input = document.getElementById('input');
  input.click();
};

const handleUpload = (event) => {
  const input = document.getElementById('input');
  console.log(input.files);
};

const TakePicture = () => {

  return (
    <div id="container" onClick={handleUploadClick}>
        <input capture onChange={handleUpload} id="input" type="file" accept="image/*" multiple />
        <span>Take Picture</span>
    </div>
  );
};

export default TakePicture;

