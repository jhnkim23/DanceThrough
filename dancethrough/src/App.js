import './App.css';
import React from 'react';
import $ from 'jquery';

function VidUpload() {
  return (
    <>
      <label htmlFor="myfile" encType="multipart/form-data">Select a file:</label>
      <input type="file" id="myfile" name="myfile"></input>
    </>
  );
}

function VidButton() {
  function handleClick() {
    let fileInput = document.getElementById('myfile').files[0]
    console.log(fileInput)
    let vid_send = new FormData()
    vid_send.append('file', fileInput)

    $.ajax ({
      type: "POST",
      enctype: 'multipart/form-data',
      url: "/upload",
      data: vid_send,
      processData: false,
      contentType: false,
      success: function(resp){
        console.log(resp);
      }
    }).then(
      $.ajax ({
        type: "POST",
        enctype: "multipart/form-data",
        url: "/compute_poses",
        data: {'name': fileInput.name},
      })
    );
  }

  return (
    <button onClick={handleClick}>
      Press this button DanceThrough-ify!
    </button>
  );
}

function VidSubmit() {
  return (
    <>
      <VidUpload />
      <VidButton />
    </>
  )
}

export default function App() {
  return (
    <VidSubmit />
  );
}