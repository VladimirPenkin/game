
function battle () {

	let userIndex = document.getElementById("human").options.selectedIndex;
	let userValue = document.getElementById("human").options[userIndex].value;

	let arr = ["камень", "ножницы", "бумага"];
	let x = Math.floor((Math.random() * arr.length));
	let inputPS = arr[x];

	ps.innerHTML = (inputPS);

if (getValue(userValue) == getValue(inputPS)) {
		result.innerHTML = "Ничья!";
	} else if (getValue(userValue) == 0 && getValue(inputPS) == 1 || getValue(userValue) == 1 && 
		getValue(inputPS) == 2 || getValue(userValue) == 2 && getValue(inputPS) == 0){
		result.innerHTML = "Вы выиграли!";
	} else {
		result.innerHTML = "выиграл Компьютер!";
	}

	function getValue (str) {
		let result;
		switch(str){
			case "камень": result = 0;
			break;
			case "ножницы": result = 1;
			break;
			case "бумага": result = 2;
			break;
		}
		return result;
	}

}

