const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const marquee = document.querySelector("#videos-marq");
  const contains = document.querySelectorAll("#videos-marq > .contain");

  marquee.addEventListener("mouseenter", () => {
    contains.forEach((contain) => {
      contain.classList.add("paused");
    });
  });

  marquee.addEventListener("mouseleave", () => {
    contains.forEach((contain) => {
      contain.classList.remove("paused");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const marquee = document.querySelector("#notes");
  const contains = document.querySelectorAll("#notes > .contain");

  marquee.addEventListener("mouseenter", () => {
    contains.forEach((contain) => {
      contain.classList.add("paused");
    });
  });

  marquee.addEventListener("mouseleave", () => {
    contains.forEach((contain) => {
      contain.classList.remove("paused");
    });
  });
});

// Videos
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video");

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      videos.forEach((v) => {
        if (v !== video) {
          v.classList.remove("hovered");
        } else {
          v.classList.add("hovered");
        }
      });
    });

    video.addEventListener("mouseleave", () => {
      videos.forEach((v) => {
        v.classList.remove("hovered");
      });
    });
  });
});