async function orderFood(name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order for " + name + " prepared")
        }, time)
    })
}

async function restaurant() {
    console.log("Order Placed")
    let pizza = await orderFood("Pizza", 1000)
    console.log(pizza)
    let burger = await orderFood("Burger", 2000)
    console.log(burger)
    let noodles = await orderFood("Noodles", 3000)
    console.log(noodles);
    console.log("All orders placed");
}
restaurant() 