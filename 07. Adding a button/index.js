// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


let count = 0 
let elCount = document.getElementById("count-el") // This gives us the pointer to that element in html 


const increment = () => {
    count += 1
    elCount.innerText = count
}


const decrement = () => {
    if (count == 0 ){
        alert("NOOOOOOOOOOO")
        return
    }
    count -= 1
    elCount.innerText = count
}

4
let one = 3
let two = 33
let lap3 = 333

function sumOfLaps (lap1, lap2, lap3 ) {
    console.log( lap1 + lap2 + lap3 )
}

sumOfLaps(one, two, lap3)


const log = document.getElementById("log") 


const save = () => {
    myDate = new Date()
    log.innerHTML += `<p> ${myDate} - ${count} People</p>`
    count = 1
    decrement()
}


// const greeting = document.getElementById("greeting-el")
// let name = "Taran"
// let hello = "Hello, "

// greeting.innerText = hello + name 


// greeting.innerText += "eeee"