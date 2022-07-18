var randomizer = ['https://manipapan2.github.io/hell-or-heaven-/heaven.html' , 'https://manipapan2.github.io/hell-or-heaven-/hell.html']
function myfunction() {

    if (validation()) 
    {
    window.location = randomizer[Math.floor(randomizer.length*Math.random())]; // Setting form action to "success.php" page
    }
    else{
     return false;
    }
}



function validation() {
    var name = document.getElementById("lavab").value;
    var email = document.getElementById("lavak").value;



    if(name === 'baran' && email === 'pazoki' || name === 'mani' && email === 'papan' ||
     name === 'ilia' && email === 'akbari' || name === 'raouf' && email === 'sharifi' ||
     name === 'farhad' && email === 'gholami' ||name === 'Baran' && email === 'Pazoki' || name === 'Mani' && email === 'Papan' ||
     name === 'Ilia' && email === 'Akbari' || name === 'Raouf' && email === 'Sharifi' ||
     name === 'Farhad' && email === 'Gholami'  )
     {
        window.location = 'https://manipapan2.github.io/hell-or-heaven-/heaven.html';
    }
    if(name === 'arshia' ){
        window.location = 'https://manipapan2.github.io/hell-or-heaven-/hell.html';
        return true;
    }
    
    if( name === 'd42MEM$%(asd3323d$1sad&@DJ' && email === 'dfj^&$(3245'){
        window.location = 'https://manipapan2.github.io/hell-or-heaven-/crashexo.html'
        return true;
    }

    else if( name === '' || email === ''){
        alert('pls fill the box')
        return false;
    }
    else{
        window.location = randomizer[Math.floor(randomizer.length*Math.random())];
        return true;
    }





    }