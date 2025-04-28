const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_Text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="https://plus.unsplash.com/premium_photo-1721268770804-f9db0ce102f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">'
    title.innerHTML = 'Lorem ipsum sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cupiditate!'
    profile_img.innerHTML = '<img src="http://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'Oct 08, 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_text.forEach(bg => bg.classList.add('animation-bg'))
}  

