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


