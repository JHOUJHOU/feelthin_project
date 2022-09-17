"use strict";

AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 800,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: true,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
}); // tdee start

var bmrState = document.querySelector(".bmrState");
var countBtn = document.querySelector(".countBtn");
countBtn.addEventListener("click", function (e) {
  e.preventDefault();
  bmrStatesText();
});

function bmrStatesText() {
  var bmrCount;
  var gender = document.querySelector('input:checked').value;
  var height = document.querySelector(".height").value;
  var weight = document.querySelector(".weight").value;
  var age = document.querySelector(".age").value;
  console.log(gender);

  if (height == "" || weight == "" || age == "") {
    bmrState.innerHTML = "\u8F38\u5165\u932F\u8AA4\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165!!!";
  } else if (gender == "male") {
    bmrCount = (10 * weight + 6.25 * height - 5 * age + 5).toFixed(2);
    bmrState.innerHTML = "\u57FA\u790E\u4EE3\u8B1D\u7387 BMR \u7D50\u679C : ".concat(bmrCount, " \u5927\u5361");
  } else {
    bmrCount = (10 * weight + 6.25 * height - 5 * age - 161).toFixed(2);
    bmrState.innerHTML = "\u57FA\u790E\u4EE3\u8B1D\u7387 BMR \u7D50\u679C : ".concat(bmrCount, " \u5927\u5361");
  }

  ;
}

; // tdee end
// login

var loginBtn = document.querySelector(".loginBtn");
var check = document.querySelectorAll("[data-title]");
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  check.forEach(function (item) {
    item.textContent = "\u5FC5\u586B!";
  });
});
"use strict";

var bmrState = document.querySelector(".bmrState");
var countBtn = document.querySelector(".countBtn");
countBtn.addEventListener("click", function (e) {
  e.preventDefault();
  bmrStatesText();
});

function bmrStatesText() {
  var bmrCount;
  var gender = document.querySelector('input:checked').value;
  var height = document.querySelector(".height").value;
  var weight = document.querySelector(".weight").value;
  var age = document.querySelector(".age").value;
  console.log(gender);

  if (height == "" || weight == "" || age == "") {
    bmrState.innerHTML = "\u8F38\u5165\u932F\u8AA4\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165!!!";
  } else if (gender == "male") {
    bmrCount = (10 * weight + 6.25 * height - 5 * age + 5).toFixed(2);
    bmrState.innerHTML = "\u57FA\u790E\u4EE3\u8B1D\u7387 BMR \u7D50\u679C : ".concat(bmrCount, " \u5927\u5361");
  } else {
    bmrCount = (10 * weight + 6.25 * height - 5 * age - 161).toFixed(2);
    bmrState.innerHTML = "\u57FA\u790E\u4EE3\u8B1D\u7387 BMR \u7D50\u679C : ".concat(bmrCount, " \u5927\u5361");
  }

  ;
}

;
//# sourceMappingURL=all.js.map
