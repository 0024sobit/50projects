const loadtext = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(bluring,30)

function bluring(){
    load++

    if(load>99){
        clearInterval(int)
}
    loadtext.innerText = `${load}%`;
    loadtext.style.opacity = scale(load, 0 , 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


const scale = (number, in_Min, in_Max, out_Min, out_Max) => {
    return (number - in_Min) * (out_Max - out_Min) / (in_Max - in_Min) + out_Min;
};

