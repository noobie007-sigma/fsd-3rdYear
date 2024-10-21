async function orderFoodName(name, time) {
return new Promise((resolev, reject) => {
    setTimeout(() => {
        resolev(name, "Prepared")
    }, time)
})
}
async function restaurant() {
    console.log("Task Started")
    const pizza = await orderFoodName("Pizza", 1000)
    console.log(pizza)
    const burger = await orderFoodName("Burger", 2000)
    console.log(burger)
}
restaurant()