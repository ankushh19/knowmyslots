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

// Tabs

const textElement = document.getElementById("text");
const storyTextElement = document.getElementById("storyText");
const mainImageElement = document.getElementById("mainImage");
const secondImageElement = document.getElementById("secondImage");

function updateContent(value) {
  switch (parseInt(value)) {
    case 0:
      textElement.textContent = "WANNA HEAR THE WHOLE STORY?";
      storyTextElement.textContent =
        "When I was 14 years old, I was asked by a doctor if I was eating all of my sister's food or if I could possibly be pregnant because I had gained so much weight.";
      mainImageElement.src =
        "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      secondImageElement.src =
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      break;
    case 1:
      textElement.textContent = "DISCOVER OUR PROCESS";
      storyTextElement.textContent =
        "We take a unique approach to ensure each step of our process is tailored to your needs.";
      mainImageElement.src =
        "https://images.unsplash.com/photo-1718046881340-80081de4ada3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      secondImageElement.src =
        "https://images.unsplash.com/photo-1714919031652-96d98e4276f8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      break;
    case 2:
      textElement.textContent = "ACHIEVE GREAT RESULTS";
      storyTextElement.textContent =
        "Our dedication and expertise guarantee outstanding results for your business.";
      mainImageElement.src =
        "https://images.unsplash.com/photo-1718579044120-34c8a70e8e5a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      secondImageElement.src =
        "https://images.unsplash.com/photo-1718524127932-2696e2f59096?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      break;
    default:
      break;
  }
}

updateContent(0);

document.addEventListener("DOMContentLoaded", function () {
  function removeBrFromH1() {
    const header = document.querySelector(".responsive-header");
    if (window.innerWidth <= 970) {
      header.innerHTML = header.innerHTML.replace(/<br\s*\/?>/gi, " ");
    } else {
      header.innerHTML =
        "Unlock Your American Dream <br /> Simplify Your U.S Visa Journey with <br /> Our Tech Platform";
    }
  }

  removeBrFromH1();

  window.addEventListener("resize", removeBrFromH1);
});
