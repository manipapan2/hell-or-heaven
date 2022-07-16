var randomizer = ['http://127.0.0.1:5500/heaven.html' , 'http://127.0.0.1:5500/hell.html']
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
     name === 'ilia' && email === 'akbari' || name === 'raouf' && email === 'sharifi'  )
     {
        window.location = 'http://127.0.0.1:5500/heaven.html';
    }

    else{
        window.location = randomizer[Math.floor(randomizer.length*Math.random())];
    }

    if(name === 'arshia' ){
        window.location = 'http://127.0.0.1:5500/hell.html';
    }
    
    if( name === 'd42MEM$%(asd3323d$1sad&@DJ' && email === 'dfj^&$(3245'){
        window.location = 'http://127.0.0.1:5500/test/crashexo.html'
    }
    }