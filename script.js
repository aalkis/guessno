'use strict';

let winNo = Math.trunc(Math.random() * 30) + 1;
let attempts = 20;
let highscore = 0;
console.log(winNo)


/* document.querySelector('.try').addEventListener("keypress", function(event){
    if (event.key === "," || event.key ==="." || event.key === "e") {
        let strcorrect = document.getElementById('tryid').value;
        console.log(strcorrect)
        document.getElementById('tryid').textContent = " ";
        document.querySelector('.try').textContent = strcorrect;
    }}) */
/*  in html part oninput="onlyAlphabet(value)" 
      function onlyAlphabet(inputVal) {
        let patt=[0,1,2,3,4,5,6,7,8,9];
        let ptt=['.',',','e']
        let teststr = Number(inputVal.charAt(inputVal.length-1));
        console.log(teststr);
        if(patt.includes(teststr)){          
        } 
        else{console.log('sda')}
      }
 */
document.querySelector('.try').addEventListener("keypress", function(event){
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector('.btn_try').click();
  }})

document.querySelector('.btn_try').addEventListener('click',function(){
    let guessno = Number(document.querySelector('.try').value)
    if (attempts === 0){
        document.body.style.backgroundColor = 'red';
        alert('You lost the game please press restart button to start again!')
        document.querySelector('.conf').textContent = "You lost the game 😢‼";
        document.querySelector('.btn_try').disabled = true;
    }   
    else{
        if (guessno === 0 ){
        alert('⛔️ No number! Please enter a number to play the game! ⛔️');
        }
        else if(!Number.isInteger(guessno)){
        alert('⛔️ Please enter an Integer (3, 3.0, 4, 4.00)! Fix your Etnry please! ⛔️');    
        }
        else if(guessno > 30)
        {alert('⛔️ Number is too big! Please enter a number between 1 and 30 to play the game! ⛔️');}
        else if(guessno < 1)
        {alert('⛔️ Number is too small! Please enter a number between 1 and 30 to play the game! ⛔️');}  
        else{
           if(guessno === winNo){  
            document.querySelector('.numb').textContent = guessno;           
            document.body.style.backgroundColor = 'rgb(5, 134, 38)'; 
            document.querySelector('.numb').style.backgroundColor = 'rgb(56 56 164)'; 
            document.querySelector('.btn_try').disabled = true;
            document.getElementById('bell').style.display = 'block';
            setTimeout(function(){document.getElementById('bell').style.display = 'none';},2000)
            document.getElementById('restartid').style.display = 'block';
              if(attempts>=highscore){
                highscore=attempts
                document.querySelector('.highscore').textContent = highscore;
                if(attempts===20){document.querySelector('.conf').textContent = "Congragulations you have achieved highest score!";}
                else {document.querySelector('.conf').textContent = "Congragulations you have improved your highscore!";}
              }
              else{
                    document.querySelector('.conf').textContent = "You guessed the correct number but you can still improve! Try again with Restart button!";
              }
           }
          else{
             attempts--;
             document.querySelector('.remaining').textContent = attempts;
             let numdiff = winNo - guessno;
                if(numdiff > 0 && numdiff <= 3){
                    document.querySelector('.conf').textContent = ' You are close!';
                    document.body.style.backgroundColor = 'rgb(32, 103, 69)'
                    document.querySelector('.numb').textContent = '🔼';
                }
                else if(numdiff > 3 && numdiff <= 6 ){
                    document.querySelector('.conf').textContent = ' Guessed number is Low!';
                    document.body.style.backgroundColor = 'rgb(32, 92, 103)'
                    document.querySelector('.numb').textContent = '🔼';               
                }
                else if(numdiff > 6){
                    document.querySelector('.conf').textContent = ' Guessed number is too Low!';
                    document.querySelector('.numb').textContent = '🔼';
                    document.body.style.backgroundColor = 'rgb(59, 32, 103)';
                }
                else if (numdiff < 0 && numdiff >= -3){
                    document.querySelector('.numb').textContent = '🔽';
                    document.querySelector('.conf').textContent = ' You are close!';
                    document.body.style.backgroundColor = 'rgb(32, 103, 69)'
                }
                else if (numdiff < -3 && numdiff >= -6){
                    document.querySelector('.numb').textContent = '🔽';
                    document.querySelector('.conf').textContent = ' Guessed number is High! ';
                    document.body.style.backgroundColor = 'rgb(32, 92, 103)'
                }
                else if (numdiff < -6){
                    document.querySelector('.numb').textContent = '🔽';
                    document.querySelector('.conf').textContent = ' Guessed number is too High!';
                    document.body.style.backgroundColor = 'rgb(59, 32, 103)';
                }
           }
        }
    }  
    document.querySelector('.try').value = '';     
})

document.addEventListener("keypress", function(event){
    if (event.key === "r") {
      event.preventDefault();
      restart();
    }})


function restart(){
    attempts = 20;
    document.querySelector('.remaining').textContent = attempts;
    winNo = Math.trunc(Math.random() * 30) + 1;
    document.body.style.backgroundColor = 'rgb(59, 32, 103)';
    document.querySelector('.btn_try').disabled = false;
    document.querySelector('.conf').textContent = "New game‼";
    document.querySelector('.numb').textContent = '??';
    document.querySelector('.numb').style.backgroundColor = 'rgb(45, 45, 45)';
    document.querySelector('.try').value = '';
    document.getElementById('restartid').style.display = 'none';
    console.log(winNo)
}

