const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generatejoke);

generatejoke()


//Using async and await
async function generatejoke(){

    const config = {
        headers:{
        'Accept': 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}




//Using .then
// function generatejoke(){

//     const config = {
//         headers:{
//         'Accept': 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }


'sdakjhfia'
'sdfa'
