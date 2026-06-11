$(function () {
  // con02 슬라이드
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    speed: 700,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  // con01 타임라인
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".con01",
      start: "top 70%",
    },
  });

  tl1
    .from(".con01 .section_en, .con01 h2, .con01 .sub_tit", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
    })
    .from(
      ".con01 ul",
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
      },
      "-=0.2",
    )
    .from(
      ".con01 h3",
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.5",
    ) // 카드 등장 애니메이션과 살짝 겹치게 시작
    .from(
      ".con01 h3::after",
      {
        opacity: 0,
        width: 0,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.3",
    );

  // con02 타임라인
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".con02",
      start: "top 70%",
    },
  });
  tl2
    .from(".con02 .section_en, .con02 h2, .con02 .sub_tit", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
    })
    .from(
      ".con02 .swiper",
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
      },
      "-=0.2",
    );

  //con03 타임라인
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".con03",
      start: "top 70%",
    },
  });

  tl3
    .from(".con03 .section_en, .con03 h2, .con03 .sub_tit", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
    })
    .from(
      ".con03 ul",
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
      },
      "-=0.2",
    );

  // 태블릿, 모바일 메뉴창
  const menuBtn = document.querySelector(".fa-bars-staggered");
  const nav = document.querySelector("header nav");
  const closeBtn = document.querySelector(".fa-x");

  menuBtn.addEventListener("click", () => {
    nav.classList.add("on");
  });
  closeBtn.addEventListener("click", () => {
    nav.classList.remove("on");
  });
});
