const randomImg = document.querySelector(".swiper-wrapper");
const Next = document.querySelector(".swiper-button-next");
const Prev = document.querySelector(".swiper-button-prev");
let imgArr = [];
let imgInterval;

function reloadeCarousel() {
  fetch("https://source.unsplash.com/random/500x500").then((res) => {
    imgArr.push(res.url);

    const swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
}

imgInterval = setInterval(() => {
  if (imgArr.length > 5) {
    imgArr.shift();
  }

  reloadeCarousel();

  if (imgArr.length < 6) {
    randomImg.innerHTML = "";

    imgArr.forEach((item) => {
      randomImg.innerHTML += `
        <div class="swiper-slide">
          <img src="${item}" alt="">
        </div>
      `;
    });
  }
}, 2000);

setTimeout(() => {
  Next.style.display = "block";
  Prev.style.display = "block";
}, 4000);

Next.addEventListener("click", () => {
  clearInterval(imgInterval);
  imgInterval = setInterval(() => {
    if (imgArr.length > 5) {
      imgArr.shift();
    }

    reloadeCarousel();

    if (imgArr.length < 6) {
      randomImg.innerHTML = "";

      imgArr.forEach((item) => {
        randomImg.innerHTML += `
          <div class="swiper-slide">
            <img src="${item}" alt="">
          </div>
        `;
      });
    }
  }, 2000);
});

Prev.addEventListener("click", () => {
  clearInterval(imgInterval);
  imgInterval = setInterval(() => {
    if (imgArr.length > 5) {
      imgArr.shift();
    }

    reloadeCarousel();

    if (imgArr.length < 6) {
      randomImg.innerHTML = "";

      imgArr.forEach((item) => {
        randomImg.innerHTML += `
          <div class="swiper-slide">
            <img src="${item}" alt="">
          </div>
        `;
      });
    }
  }, 2000);
});
