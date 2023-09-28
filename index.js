// const pages = document.querySelectorAll(".page");
// const translateAmount = 100; 
// let translate = 0;

// slide = (direction) => {

//     direction === "next" ? translate -= translateAmount : translate += translateAmount;
    
//     pages.forEach(
//         pages => (pages.style.transform = `translateX(${translate}%)`));
//     }

// normal function
const body = document.querySelector("body");

function move() {

    console.log('Hello')
}

body.addEventListener('click', move)

// Arrow Function
// const body1 = document.querySelector("body");

// move = () => {

//     console.log('Hello')
// }

// body1.addEventListener('click', move)
