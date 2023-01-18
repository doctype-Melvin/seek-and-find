function strikeThrough(text) {
    return text.split('')
    .map(char => char + '/u0336')
    .join('')
}

function celebrate(found, prop){
    document.querySelector('.info').style.display = 'block'
    found ?
    document.querySelector('.info').textContent = `You've found the ${prop}` :
    document.querySelector('.info').textContent = `Better luck next time!` 
}

export { strikeThrough, celebrate }