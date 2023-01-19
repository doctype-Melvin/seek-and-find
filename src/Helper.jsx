function celebrate(found, prop){
    document.querySelector('.info').style.display = 'block'
    found ?
    document.querySelector('.info').textContent = `You've found the ${prop}` :
    document.querySelector('.info').textContent = `Better luck next time!` 
}

function makeRelative (x, y) {
    let relX = Math.round((x / document.querySelector('.imgContainer').clientWidth)*100)
    let relY = Math.round((y / document.querySelector('.imgContainer').clientHeight)*100)
    console.log(relX, relY)
}

function endGame (val) {
    if (val === 5) {
        console.log('Game Over')
    } else {
        console.log('Keep playing')
    }
}

export { celebrate, makeRelative, endGame }