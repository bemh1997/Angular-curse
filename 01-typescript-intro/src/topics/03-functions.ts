function addNumbers( a: number, b: number ): number{
	return a+b;
}

const addNumbersArrow = (a: number, b: number):string =>{
	return `${a+b}`;
}

function multiply (firstNumber:number, secondNumber?: number, base:number = 2){
	return firstNumber * base;
}

// const result: number = addNumbers(1,2);
// const resutlArrow: string = addNumbersArrow(1,2);
// const multiplyResult: number = multiply(5);
// console.table({result, resutlArrow, multiplyResult});

interface Character{
	name: string;
	hp: number;
	showHP: () => void;
}

const healCharacter = ( character: Character, amount: number): void =>{
	character.hp += amount;
}

const strider: Character = {
	name: 'Strider',
	hp: 50,
	showHP(){
		console.log(`Puntos de vida ${this.hp}`)
	}
}

strider.showHP();
healCharacter(strider, 10);
strider.showHP();
healCharacter(strider, 50);
strider.showHP();
export {};