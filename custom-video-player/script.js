const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//Play & pause video
function toggleVideoStatus() {
  return true;
}

//Update play/pause icon
function updatePlayIcon() {
  return true;
}

//Update progress & timestamp
function updateProgress() {
  return true;
}

// Set video time to progress
function setVideoProgress() {
  return true;
}

//Stop video
function stopVideo() {
  return true;
}

//Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

playBtn.addEventListener("click", toggleVideoStatus);

stopBtn.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
