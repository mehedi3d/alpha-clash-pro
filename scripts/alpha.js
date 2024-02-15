// function play(){
//     // console.log('paly now')
//     const homesection=document.getElementById('home-screen');
//     // console.log(homesection.classList)
//     homesection.classList.add('hidden')
//     const playground=document.getElementById('play-ground');
//     // console.log(playground.classList)
//     playground.classList.remove('hidden')
// }
function handlekeybutpress(event) {
    const playerprees = event.key;
    // console.log('press key', playerprees)

    // expected key
    const crarrentalphabeteliment = document.getElementById('charent-alphabet');
    const screenalphabet = crarrentalphabeteliment.innerText;
    expectedalphabet=screenalphabet.toLowerCase();
    // console.log(playerprees, expectedalphabet)

    if(playerprees===expectedalphabet){
        console.log('you win a poient')
        removebacgroundcolorbyid(expectedalphabet)
        continueGame();
        const currentscoreelement=document.getElementById('current-score');
        const currentscoretext= currentscoreelement.innerText;
        currentscore=parseFloat(currentscoretext)
        console.log(currentscore)

        newscore=currentscore+1;
        
        currentscoreelement.innerText=newscore;
    }
    else{
        console.log('you lost the game');
        const currentlifeelement=document.getElementById('current-life');
        const currentlifetext=currentlifeelement.innerText;
        const currentlife=parseFloat(currentlifetext);

        const newlife=currentlife-1;

        currentlifeelement.innerText=newlife;
    }
}


document.addEventListener('keyup', handlekeybutpress)
function continueGame() {
    const alphabet = getrendomword()
    // console.log('your random alphabet:', alphabet)
    // show the carrent alphabet on the scren
    const carrentalphabet = document.getElementById('charent-alphabet');
    carrentalphabet.innerText = alphabet

    addbgcid(alphabet);
}

function play() {
    hideelimentbyid('home-screen');
    removealimentbyid('play-ground')
    continueGame();
}