// "use strict";
// function display() {
//     alert("Hastar")
//     //3 types of pop-ups: alert, confirm and propmt
//     let x = confirm("Are you mad?")
//     alert(x)
//     let ans = prompt("Why are you mad/not mad?")
//     alert(ans)
// }
// let a = 12/5
// let b  = "hello"
// let c = [1, 2, 4]
// let d = true
// let e = {
//     name: "suyash"
// }
// console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof display)
// let x = "12"/"6"
// console.log(x);
// let bol = true
// console.log(String(bol).charAt(1))
// let str = '12ab'
// let num = Number(str)
// console.log(typeof num, num)


function validate() {
    let login = document.getElementById('login').value
    let pass = document.getElementById('pswrd').value
    let p1 = document.getElementById('result')
    if(login === "admin" && pass === "admin") {
        p1.innerText = "Login Successfull"
    } else {
        p1.innerText = "Login Failed"
    }
    
    return false;
}
function clearData() {
    
}