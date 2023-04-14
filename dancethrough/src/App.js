import './App.css';
import axios from 'axios';

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
      let fileInput = document.getElementById('myfile')
      let selectedFile = fileInput.files[0]

      let formData = new FormData()
      formData.append('vidUpload', selectedFile)

      console.log(formData)

      axios({
        method: 'post',
        url: '/upload',
        data: formData
      })
      .then(function(response) {
        console.log(response.data)
      })

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
