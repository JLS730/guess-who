import {cards} from './data/cards.js'

const playButton = document.querySelector('.play-button')
const modalCloseButton = document.querySelector('.close-modal')
const modalOpenButton = document.querySelector('.modal-image')
const selectButton = document.querySelector('.select-button')
const askQuestionButton = document.querySelector('.ask-question-button')

const hairLengthInput = document.querySelector('.hair-length-input')
const hairColorInput = document.querySelector('.hair-color-input')
const eyebrowsInput = document.querySelector('.eyebrows-input')
const eyeColorInput = document.querySelector('.eye-color-input')
const noseInput = document.querySelector('.nose-input')
const cheeksInput = document.querySelector('.cheeks-input')
const mustacheInput = document.querySelector('.mustache-input')
const lipsInput = document.querySelector('.lips-input')
const facialExpressionInput = document.querySelector('.facial-expression-input')
const guessCardInput = document.querySelector('.guess-card-input')

const hatDetail = document.querySelector('.hat')
const hairLengthDetail = document.querySelector('.hair-length')
const hairColorDetail = document.querySelector('.hair-color')
const eyebrowsDetail = document.querySelector('.eyebrows')
const glassesDetail = document.querySelector('.glasses')
const eyeColorDetail = document.querySelector('.eye-color')
const noseDetail = document.querySelector('.nose')
const cheeksDetail = document.querySelector('.cheeks')
const mustacheDetail = document.querySelector('.mustache')
const beardDetail = document.querySelector('.beard')
const lipsDetail = document.querySelector('.lips')
const facialExpressoinDetail = document.querySelector('.facial-expression')

let randomCard = Math.floor(Math.random() * cards.length)
let winningCard = cards[randomCard].name
let winningCardInfo = cards[randomCard]

const clearInputs = () => {
    hairLengthInput.value = ''
    hairColorInput.value = ''
    eyebrowsInput.value = ''
    eyeColorInput.value = ''
    noseInput.value = ''
    cheeksInput.value = ''
    lipsInput.value = ''
    facialExpressionInput.value = ''
    guessCardInput.value = ''
}

const playButtonDisable = (boolean) => {
    playButton.disabled = boolean
}

const selectButtonDisable = (boolean) => {
    selectButton.disabled = boolean
}

const gameBeginText = (elem) => {
    elem.textContent = ''
    elem.style.color = 'black'

    setTimeout(() => {
        elem.textContent = 'Card Selected'
    }, 1000)
    setTimeout(() => {
        elem.textContent = 'Let\'s Begin!'
    }, 3000)
    setTimeout(() => {
        elem.textContent = ''
        selectButtonDisable(false)
    }, 5000)
}

playButton.addEventListener('click', () => {
    if(playButton.textContent == 'Play Again?') {
        window.location.reload(false)
    }

    gameBeginText(document.querySelector('.info-answer'))

    console.log(winningCard)
    console.log(winningCardInfo)
})

guessCardInput.addEventListener('keypress', e => {
    if(e.key === 'Enter') {
        if(guessCardInput.value.toLowerCase() == winningCardInfo.name) {
            document.querySelector('.info-answer').textContent = 'WINNER!!!'
            document.querySelector('.info-answer').style.color = 'green'

            setTimeout(() => {
                document.querySelector('.play-button').textContent = 'Play Again?'
                playButtonDisable(false)
            }, 1000)
        } else {
            document.querySelector('.info-answer').textContent = 'Loser!!!'
            document.querySelector('.info-answer').style.color = 'red'
        }
    }
})

selectButton.addEventListener('click', () => {
    if(hatDetail.checked == true) {
        document.querySelector('.hat-question').classList.remove('hidden')
    } else if (hairLengthDetail.checked == true) {
        document.querySelector('.hair-length-question').classList.remove('hidden')
    } else if (hairColorDetail.checked == true) {
        document.querySelector('.hair-color-question').classList.remove('hidden')
    } else if (eyebrowsDetail.checked == true) {
        document.querySelector('.eyebrows-question').classList.remove('hidden')
    } else if (glassesDetail.checked == true) {
        document.querySelector('.glasses-question').classList.remove('hidden')
    } else if (eyeColorDetail.checked == true) {
        document.querySelector('.eye-color-question').classList.remove('hidden')
    } else if (noseDetail.checked == true) {
        document.querySelector('.nose-question').classList.remove('hidden')
    } else if (cheeksDetail.checked == true) {
        document.querySelector('.cheeks-question').classList.remove('hidden')
    } else if (mustacheDetail.checked == true) {
        document.querySelector('.mustache-question').classList.remove('hidden')
    } else if (beardDetail.checked == true) {
        document.querySelector('.beard-question').classList.remove('hidden')
    } else if (lipsDetail.checked == true) {
        document.querySelector('.lips-question').classList.remove('hidden')
    } else if (facialExpressoinDetail.checked == true) {
        document.querySelector('.facial-expression-question').classList.remove('hidden')
    } else {
        return
    }

    selectButtonDisable(true)
})

askQuestionButton.addEventListener('click', () => {
    if(!document.querySelector('.hat-question').classList.contains('hidden')) {
        if(winningCardInfo.hat === true) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else if (!document.querySelector('.hair-length-question').classList.contains('hidden')) {
        if(hairLengthInput.value.toLowerCase() == winningCardInfo.hairType) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else if (!document.querySelector('.hair-color-question').classList.contains('hidden')) {
        if(hairColorInput.value.toLowerCase() == winningCardInfo.hairColor) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else if (!document.querySelector('.eyebrows-question').classList.contains('hidden')) {
        if(eyebrowsInput.value.toLowerCase() == winningCardInfo.eyebrowType) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else if (!document.querySelector('.glasses-question').classList.contains('hidden')) {
        if(winningCardInfo.glasses === true) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else if (!document.querySelector('.eye-color-question').classList.contains('hidden')) {
        if(eyeColorInput.value.toLowerCase() == winningCardInfo.eyeColor) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else if (!document.querySelector('.nose-question').classList.contains('hidden')) {
        if(noseInput.value.toLowerCase() == winningCardInfo.noseType) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else if (!document.querySelector('.cheeks-question').classList.contains('hidden')) {
        if(cheeksInput.value.toLowerCase() == winningCardInfo.cheekType) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else if (!document.querySelector('.mustache-question').classList.contains('hidden')) {
        if(winningCardInfo.mustache == true) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else if (!document.querySelector('.beard-question').classList.contains('hidden')) {
        if(winningCardInfo.beard === true) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else if (!document.querySelector('.lips-question').classList.contains('hidden')) {
        if(lipsInput.value.toLowerCase() == winningCardInfo.lipSize) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else if (!document.querySelector('.facial-expression-question').classList.contains('hidden')) {
        if(facialExpressionInput.value.toLowerCase() == winningCardInfo.facialExpression) {
            document.querySelector('.info-answer').textContent = 'YES'
        } else {
            document.querySelector('.info-answer').textContent = 'NO'
        }
    } else {
        return
    }

    if(!document.querySelector('.hat-question').classList.contains('hidden')) {
        document.querySelector('.hat-question').classList.add('hidden')
    } else if (!document.querySelector('.hair-length-question').classList.contains('hidden')) {
        document.querySelector('.hair-length-question').classList.add('hidden')
    } else if (!document.querySelector('.hair-color-question').classList.contains('hidden')) {
        document.querySelector('.hair-color-question').classList.add('hidden')
    } else if (!document.querySelector('.eyebrows-question').classList.contains('hidden')) {
        document.querySelector('.eyebrows-question').classList.add('hidden')
    } else if (!document.querySelector('.glasses-question').classList.contains('hidden')) {
        document.querySelector('.glasses-question').classList.add('hidden')
    } else if (!document.querySelector('.eye-color-question').classList.contains('hidden')) {
        document.querySelector('.eye-color-question').classList.add('hidden')
    } else if (!document.querySelector('.nose-question').classList.contains('hidden')) {
        document.querySelector('.nose-question').classList.add('hidden')
    } else if (!document.querySelector('.cheeks-question').classList.contains('hidden')) {
        document.querySelector('.cheeks-question').classList.add('hidden')
    } else if (!document.querySelector('.mustache-question').classList.contains('hidden')) {
        document.querySelector('.mustache-question').classList.add('hidden')
    } else if (!document.querySelector('.beard-question').classList.contains('hidden')) {
        document.querySelector('.beard-question').classList.add('hidden')
    } else if (!document.querySelector('.lips-question').classList.contains('hidden')) {
        document.querySelector('.lips-question').classList.add('hidden')
    } else if (!document.querySelector('.facial-expression-question').classList.contains('hidden') == true) {
        document.querySelector('.facial-expression-question').classList.add('hidden')
    } else {
        return
    }

    setTimeout(() => {
        selectButtonDisable(false)
    }, 500)
})

modalOpenButton.addEventListener('click', () => {
    document.querySelector('.image-modal-background').classList.remove('hidden')
})

modalCloseButton.addEventListener('click', () => {
    document.querySelector('.image-modal-background').classList.add('hidden')
})

clearInputs()
selectButtonDisable(true)