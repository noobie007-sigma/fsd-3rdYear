// let num = [1, 2, 3, 4, 45, 54, 67]
// //map
// let newNum = num.map(x => x*2)
// console.log(newNum)
// //filter
// let evenNum = num.filter(x => x%2==0)
// console.log(evenNum)
// //reduce: 
// const sum = num.reduce((accumulator, initialVal) => accumulator + initialVal, 0)
// console.log(sum)
const students = [
    {name: "Alice", score: 21},
    {name: "Bob", score: 23},
    {name: "Charlie", score: 80},
    {name: "David", score: 45},
    {name: "Robin", score: 100}
]
//display scores of all students
// students.forEach((o) => console.log(o.score))
// console.log(students.map(o => o.score))
// console.log(students.reduce((x, y) => x+y.score, 0))
console.log(students.map((x) => x.score).filter((x) => x>40).reduce((a, b) => a+b.score, 0))

