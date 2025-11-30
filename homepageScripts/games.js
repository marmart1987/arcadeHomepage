const games = [
    { title: "Pacman", thumbnail: "pacman.jpg", thumbnailScale: 1.5, url: "/games/pacman/" },
    { title: "Snake", thumbnail: "snake.jpg", thumbnailScale: 0.88, url: "https://example.com" }
]

const gameElements = document.getElementsByClassName('game')
const numberOfSlots = gameElements.length

for (let gameNo = 0; gameNo < numberOfSlots; gameNo++) {
    const isDefined = (games[gameNo] !== undefined)
    let gameElement = gameElements.item(gameNo)


    gameElement.textContent = isDefined && games[gameNo].title ? games[gameNo].title : "Error"
    gameElement.style["background-image"] = isDefined && games[gameNo].thumbnail ? `url(/assets/gameThumbnails/${games[gameNo].thumbnail})` : null
    gameElement.style["background-size"] = isDefined && games[gameNo].thumbnailScale ? `${games[gameNo].thumbnailScale * 100}%` : null
    gameElement.onclick = isDefined && games[gameNo].url ? (() => { window.location.href = games[gameNo].url; }) : null
}
