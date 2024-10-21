// // // let a = () => {
// // //     console.log("Arrow Function")
// // // }

// // // a();
// // // let b = () => console.log("Single line statement execute krne ke liye ye format use karo")
// // // b();

// // let c = (x, y) => x+y;
// // console.log(c("Rahul", "Ravi"))
// // console.log(c(12,21))
// // function display() {
// //     let p1 = document.querySelectorAll('p')
// //     p1[0].innerHTML = "I am paragraph"
// //     p1[0].style.backgroundColor = 'red'
// //     p1[1].innerHTML = "I am 2nd paragraph"
// //     p1[1].style.backgroundColor = 'green'
// // }
// // function changeText() {
// //     let heading = document.querySelector('h1')
// //     heading.textContent = "Changed Heading"
// //     let a1 = document.querySelector('a')
// //     a1.setAttribute('href', 'https://aktu.ac.in')
// //     a1.setAttribute('target', '_blank')
// //     a1.innerHTML = "AKTU Website"
// // }
// // let createNewDiv = () => {
// //     const newDiv = document.createElement('div')
// //     // newDiv.style.backgroundColor = 'red'
// //     // newDiv.style.height = '20px'
// //     // newDiv.style.width = '20px'
// //     newDiv.textContent = "This is newly added content"

// //     const bod = document.querySelector('body')
// //     bod.appendChild('newDiv')
// // }

// const but = document.querySelector('button')
// but.addEventListener('click', () => {
//     document.getElementById('res').innerHTML = "Updated"
// });

console.log("start");
setTimeout(() => {
    console.log("First task completed")
    setTimeout(() => {
        console.log("Second task completed")
        setTimeout(() => {
            console.log("Thied task completed")
        }, 3000)
    }, 2000)
}, 1000)
console.log("End")
