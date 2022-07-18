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
