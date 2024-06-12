function playVideo() {
  var playButton = document.querySelector(".play-btn");
  var thumbnail = document.querySelector(".video-thumbnail");
  var video = document.getElementById("youtube-video");

  playButton.style.display = "none";
  thumbnail.style.display = "none";
  video.style.display = "block";
  video.src += "&autoplay=1";
}

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
