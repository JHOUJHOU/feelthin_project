AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});


// tdee start
let bmrState = document.querySelector(".bmrState");
const countBtn = document.querySelector(".countBtn");

countBtn.addEventListener("click",function(e) {
  e.preventDefault();
  bmrStatesText();
});

function bmrStatesText() {
  let bmrCount;
  let gender = document.querySelector('input:checked').value;
  const height = document.querySelector(".height").value;
  const weight = document.querySelector(".weight").value;
  const age = document.querySelector(".age").value;
  console.log(gender);
  if ( height == "" ||  weight == "" || age == "" ) {
        bmrState.innerHTML = `輸入錯誤，請重新輸入!!!`;
  } else if ( gender == "male") {
       bmrCount = ((10 * weight) + ( 6.25 * height) - (5 * age) + 5 ).toFixed(2);
      bmrState.innerHTML = `基礎代謝率 BMR 結果 : ${bmrCount} 大卡`; 
  } else {
       bmrCount = ((10 * weight) + ( 6.25 * height) - (5 * age) - 161 ).toFixed(2);
      bmrState.innerHTML = `基礎代謝率 BMR 結果 : ${bmrCount} 大卡`;
    };   
};
// tdee end

// login
const loginBtn = document.querySelector(".loginBtn");
const check = document.querySelectorAll("[data-title]");

loginBtn.addEventListener("click",function(e){
    e.preventDefault();
    check.forEach(function(item){
        item.textContent = `必填!`;
    })
});