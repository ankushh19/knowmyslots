function playVideo() {
  var playButton = document.querySelector(".play-btn");
  var thumbnail = document.querySelector(".video-thumbnail");
  var video = document.getElementById("youtube-video");

  playButton.style.display = "none";
  thumbnail.style.display = "none";
  video.style.display = "block";
  video.src += "&autoplay=1";
}

// Login SignUp

const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
      return;
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});
