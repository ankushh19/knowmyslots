const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video");

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      videos.forEach((v) => {
        if (v !== video) {
          v.classList.add("blur");
        }
      });
    });

    video.addEventListener("mouseleave", () => {
      videos.forEach((v) => {
        v.classList.remove("blur");
      });
    });
  });
});
