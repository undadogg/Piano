var piano = document.querySelector('.piano--container'),
    pianoKeys = document.querySelectorAll('.piano--container li'),
    pianoKSounds = document.querySelectorAll('.piano--container li audio');

pianoKeys.forEach( (pianoKey, index) => {
    pianoKey.addEventListener('click', function(){
        console.log(pianoKSounds[index].src)
        pianoKSounds[index].currentTime = 0   
        pianoKSounds[index].play()
    })
})