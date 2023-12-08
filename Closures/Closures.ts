//Closures are the functions that binds to its outer scope or lexical environments, it means closures gives you access to outer functions from inner function
//We can achieve encapsulation with the help of closures  


for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}
