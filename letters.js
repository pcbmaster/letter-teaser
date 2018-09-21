const readline = require('readline');

function print(str){
    console.log(str);
}

function menu(){
    print("Letters Menu");
    print("1) Your input");
    print("2) Exit");
}

exiting = false;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

while(!exiting){
    choice = "";
    rl.question('Your choice: ', (answer) => {
	choice = answer;
	rl.close();
    });
    if(choice == 1) {
	input = "";
	 rl.question('Your input: ', (answer) => {
	     input = answer;
	     rl.close();
	 });
	words = input.split(" ");
	words.forEach((word) => {
	    word.match('([a-zA-Z]).*(\1)');
	});
    } else {
	exiting = true;
    }
}

    
