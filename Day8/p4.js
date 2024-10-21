function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const students = [
                {name: "Alice", score: 21},
                {name: "Bob", score: 23},
                {name: "Charlie", score: 80},
                {name: "David", score: 45},
                {name: "Robin", score: 100}
            ]
            resolve(students)
        }, 4000)
    })
}
fetchData()
    .then((data) => {
        const sum = data.reduce((a, data) => a + data.score, 0)
        console.log(sum)
    })
    .catch((error) => console.log(error))