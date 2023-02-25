
// My game
const getRundomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min ).toFixed(0)
    return randomNum
}

const getTask = () => {
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRundomNumInRange(0, 100)} ${symbol} ${getRundomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить!"
        toggleGameState()
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        btnGame.innerText = "Сыграть еще раз!"
        toggleGameState()
    }
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    // console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})



const choosedEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")

const choosedState = {
    countEl: 0,
    setCountValue(value) {
        choosedState.countEl += value
        counterEl.innerText = choosedState.countEl
    }
}

const changeCount = (value) => {
    choosedState.countEl += value
    counterEl.innerText = choosedState.countEl
}

const eventFunc = (e) => {
    // choosedEl[i].className = "choosed_element"
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        choosedState.setCountValue(+e.target.innerText)
    } else {
        e.target.className = ""
        choosedState.setCountValue(- e.target.innerText)
    }
}
for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}
// choosedEl[2].removeEventListener("click", eventFunc)

