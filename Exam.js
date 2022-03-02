function randomNumber(max){
	return Math.floor(Math.random()*max) + 1 ;
	}
	
let x = randomNumber(200);
let n = 0;

function guessAnwser(){
	
	n++;
	if(document.getElementById("guessButton").value == "GUESS")
		{
			
			let y = document.getElementById("guessText").value;
			guessPrevius.textContent = "Предижно използвано число : ";
			guessPrevius.textContent += y;
			if(y >= 201)
			{
				alert("Трябва да е в интервал от 1 до 200");
			}
			else if(x > y)
			{
				guessPrh.textContent = "По-голямо!";
				guessPrh.style.color = "orange";
				document.getElementById("guessTries").innerHTML = "Номер на пробване :" +n;
				
			}
			else if(x < y)
			{
				guessPrh.textContent = "По-малко!";
				guessPrh.style.color = "purple";
				document.getElementById("guessTries").innerHTML = "Номер на пробване :" +n;
				
			}
			else
			{
				guessPrh.textContent = "Верен отговор.";
				guessPrh.style.color = "green";
				document.getElementById("guessButton").value = "Играйте пак ?";
				document.getElementById("guessTries").innerHTML = "Пробвахте общо : " + +n + " пъти";
			}
			document.getElementById("guessTries").focus();
			
		}
		else
		{
			n = 0 ;
			x = randomNumber(200);
			document.getElementById("guessPrevius").innerHTML = " " ;
			document.getElementById("guessPrh").innerHTML = " ";
			document.getElementById("guessText").value = " ";
			document.getElementById("guessTries").innerHTML = "Начален брой на пробите : " +n;
			document.getElementById("guessButton").value = "GUESS";
			document.getElementById("guessTries").focus();
		}if(n>=15)
			{
				guessPrh.textContent = "Нямате право на повече опити.";
				guessPrh.style.color = "red";
				document.getElementById("guessButton").value = "Играйте пак ?";
			}
			
	}
	
	