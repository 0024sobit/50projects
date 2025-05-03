const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages =[
    'messege One',
    'messege Two',
    'messege Three',
    'messege Four',
]

const types = ['info', 'succes', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(messege = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = messege ? messege :getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}


function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}


