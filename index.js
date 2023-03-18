var gorbe = document.getElementById("gorbe")

var randomizer = ['https://manipapan2.github.io/hell-or-heaven-/heaven.html' , 'https://manipapan2.github.io/hell-or-heaven-/hell.html']
function myfunction() {

    if (validation()) // Calling validation function
    {
    // document.getElementById("formp").
    window.location = randomizer[Math.floor(randomizer.length*Math.random())]; // Setting form action to "success.php" page
    // document.getElementById("formp").submit(); // Submitting form
    }
}



function validation() {
    var name = document.getElementById("lavab").value;
    var email = document.getElementById("lavak").value;


    if(name === 'baran' && email === 'pazoki' || name === 'mani' && email === 'papan' ||
     name === 'ilia' && email === 'akbari' || name === 'raouf' && email === 'sharifi' ||
     name === 'farhad' && email === 'gholami'  )
     {
        window.location = 'https://manipapan2.github.io/hell-or-heaven-/heaven.html';
        return false;
    }

    if(name === 'arshia' ){
        window.location = 'https://manipapan2.github.io/hell-or-heaven-/hell.html';
        return false;
    }

    if( name === 'd42MEM$%(asd3323d$1sad&@DJ' && email === 'dfj^&$(3245'){
        window.location = 'https://manipapan2.github.io/hell-or-heaven-/crashexo.html'
        return false;
    }


    if( name === '' || email === ''){
        alert('pls fill the box')
        return false;
    }
    
    else{
        window.location = randomizer[Math.floor(randomizer.length*Math.random())];
    }



}

function ger(){
    var wo = window.innerWidth + 100
    console.log(window.innerWidth,wo)
    gorbe.style.transform="translateX(" + 100 + "px)"
    gorbe.style.display="flex"
}

setTimeout(() => {
    ger()
}, "100");


var sety = setInterval(() => {
    let currentTime = new Date();
    
    if (currentTime.getHours() === 11 && currentTime.getMinutes() === 11) {
      let myVariable = "It";
      gorbee()
    }
}, 500);


// gorbe.style.marginLeft=window.innerWidth 
function gorbee(){
    clearInterval(sety)
    gorbe.style.transition = "5s"
    gorbe.style.transform="translateX(0px)"
    setTimeout(() => {
        gorbe.style.backgroundImage="url(gorbe.gif)"
    }, "5000");

    setTimeout(() => {
        gorbe.style.backgroundImage="url(gorbe.png)"
    }, 11500);

    setTimeout(() => {
        gorbe.style.transform="translateX(" + 100 +"px)"
    }, 14000);
}




// setTimeout(() => {
//     gorbee()
// }, "1000");