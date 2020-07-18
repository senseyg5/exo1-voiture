let voiture = document.querySelector('.voiture')
let posInit  = voiture.style.left;
let posTopInit  = voiture.style.top;
let posDegInit  = voiture.style.transform;

function bouger(dir, down, rotate){
    if(dir){
        console.log('Direction', dir)
        console.log('Position Initial: ',posInit)
        posInit = +posInit + dir;
        console.log('Nouvelle Position : ',posInit)
        document.querySelector('.voiture').style.transition =  'all .5s'
        document.querySelector('.voiture').style.left = posInit +'px'
    }
    else if(down){
        console.log('Rotation', down)
        console.log('Position Top Initial: ',posTopInit)
        posTopInit = +posTopInit + down;
        console.log('Nouvelle Top Position : ',posTopInit)
        document.querySelector('.voiture').style.transition =  'all .5s'
        document.querySelector('.voiture').style.top =  posTopInit + 'px'
    }
    else{
        console.log('Rotation', rotate)
        console.log('Position degre Initial: ',posDegInit)
        posDegInit = +posDegInit + rotate;
        console.log('Nouvelle degre Position : ',posDegInit)
        document.querySelector('.voiture').style.transition =  'all .5s'
        document.querySelector('.voiture').style.transform =  'rotate('+ posDegInit + 'deg)'
    }
}