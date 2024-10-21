const myPromise = new Promise((resolve, reject) => {
    let success = false;
    setTimeout(() => {
        if(success) {
            resolve("Data sent successfully")
        } else {
            reject("Data not sent")
        }
    }, 5000)
}).then((message) => {
    console.log("Data: ", message)
}).catch((error) => {
    console.log("Error: ", error)
})