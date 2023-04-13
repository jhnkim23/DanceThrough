import './App.css';

function VidSubmit() {
  function VidUpload() {
    return (
      <>
        <label htmlFor="myfile">Select a file:</label>
        <input type="file" id="myfile" name="myfile"></input>
      </>
    )
  }
  
  function VidButton() {
    function handleClick() {
      let fileInput = document.getElementById('myfile');
      let selectedFile = fileInput.files[0];
      console.log(selectedFile);
    }
  
    return (
      <button onClick={handleClick}>
        Press this button DanceThrough-ify!
      </button>
    )
  }

  return (
    <>
      <VidUpload />
      <VidButton />
    </>
  )
}

function App() {
  return (
    <VidSubmit />
  );
}

export default App;
