const fadeEls = document.querySelectorAll('.fade-in');
const fadeEl = document.querySelector('.goal__wrapper');

AOS.init();

// gsap
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간 , 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// scroll spy
const spyEls = document.querySelectorAll('.scroll-spy');

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여질 여부를 감시하는곳
    triggerHook: 0.8, // 뷰포트 수직 너비 (0~ 1)
  })
    .setClassToggle(spyEl, 'show') // 클래스에 show 붙여줌
    .addTo(new ScrollMagic.Controller());
});

//totop
const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
