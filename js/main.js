var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3500,
      },
    });

    let nav = document.querySelector(".navbar");
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 50) {
        nav.classList.add("bg-white");
      }
    };

    let navBar = document.querySelectorAll(".nav-link");
    let navCollapse = document.querySelector(".navbar-collapse.collapse");
    navBar.forEach((a) => {
      a.addEventListener("click", () => {
        navCollapse.classList.remove("show");
      });
    });