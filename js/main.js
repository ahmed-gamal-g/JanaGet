var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
});
  


// let plus = document.getElementsByClassName("plus-plus")
// let minus = document.getElementsByClassName("minus-minus")
// let NUM = document.getElementsByClassName("nums")

// console.log(plus)
// console.log(minus)
// console.log(NUM)



// let countt = 1
// for (let i = 0; i < plus.length; i++){
  //   var btnPlus = plus[i]
//   btnPlus.addEventListener("click", function (event) {
  //     var btnClicked = event.target
//     console.log(btnClicked)
//     btnClicked.NUM[0].value = countt ++
//   })
// }





// start total price
// let plus = document.querySelectorAll(".plus-plus")
// let minus = document.querySelectorAll(".minus-minus")
// let NUM = document.querySelectorAll(".nums")

// let countInput = +NUM.value;

// for (let i = 0; i < NUM.length; i++){
//   countInput = +NUM[i].value;
// }

// for (let i = 0; i < plus.length; i++){
//   plus[i].onclick = function () {
//     if (countInput < 10) {
//         countInput += 1;
//     }

    
//     if (countInput <= 10) {
//       NUM[i].setAttribute("value" , "" + countInput) =  countInput
//     } else {
//         console.log("done")
//     }
// }
// }


// for (let i = 0; i < minus.length; i++) {
//   minus[i].onclick = function () {
//     if (countInput > 0) {
//       countInput -= 1;
//     }
    
//     if (countInput <= 10) {
//       NUM[i].value =  countInput
//     } else {
//       console.log("done")
//     }
//   }
// }
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// // start total price
let plus = document.getElementsByClassName("plus-plus")
let minus = document.getElementsByClassName("minus-minus")
// console.log(plus)
// console.log(minus)

for (let i = 0; i < plus.length; i++){
  var btnPlus = plus[i]
  btnPlus.addEventListener("click", function (event) {
    var btnClicked = event.target
    // console.log(btnClicked)
    var input = btnClicked.parentElement.children[1];
    // console.log(input)
    var inputValue = input.value;
    // console.log(inputValue)
    var newValue = parseInt(inputValue) + 1;
    console.log(++inputValue)
    var lastValue = input.setAttribute("value", "" + newValue);
    newValue = lastValue
  })
}

for (let i = 0; i < minus.length; i++){
  var btnPlus = minus[i]
  btnPlus.addEventListener("click", function (event) {
    var btnClicked = event.target
    // console.log(btnClicked)
    var input = btnClicked.parentElement.children[1];
    // console.log(input)
    var inputValue = input.value;
    // console.log(inputValue)
    var newValue = parseInt(inputValue) - 1;
    console.log(++inputValue)
    var lastValue = input.setAttribute("value", "" + newValue);
    newValue = lastValue
  })
}

// // end total price



function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

function showPreview2(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-2-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

function showPreview3(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-3-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

function showPreview4(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-4-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}
