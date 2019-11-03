let password = "jarChat#3592";
let input;
let next = 0;
do{
	input = prompt("Passwort:");
	if(input == password){
		next = 1;
	}
}while(next == 0);