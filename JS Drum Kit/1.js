//on clicking any key on keyboard do what this function tells to do
//e is event happened on screen which is basically an object full of data


// window.addEventListener("keydown", function(e){
//     console.log(e);
//     console.log(e.keyCode);
// })

window.addEventListener('keydown', function(e){
    // console.log(e);
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    // console.log(audio);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    if(!audio) return;

    key.classList.add('playing');
    audio.currenTime = 0;
    audio.play();
})

function removeTransition(e){

    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));