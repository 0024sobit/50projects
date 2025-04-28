const counter = document.querySelectorAll('.counter');

counter.forEach(counter => {
    counter.innerText = '0'

    const updatConter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target /200

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updatConter, 1)
        } else{
            counter.innerText = target
        }
    } 

    updatConter()        
})