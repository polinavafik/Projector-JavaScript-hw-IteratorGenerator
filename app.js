/*Задача 1 - ‘FizzBuzz’ через ітератор та генератор
 Є така класична задача:

'Напишіть програму, яка виводить на екран числа від 1 до 100. При цьому замість чисел, кратних трьом, програма повинна виводити слово Fizz, а замість чисел, кратних п'яти – слово Buzz. Якщо число кратно п'ятнадцяти, то програма має виводити слово FizzBuzz'
Вирішіть цю задачу:  
*/

/*
//1) за допомогою ітератора
const range = {
	from: 1,
	to: 100
}
range[Symbol.iterator] = function fizzBuzzIterator() {
	let curr = this.from;
	let last = this.to;

	return {
		next() {
			if (curr <= last) {
				if (curr % 15 === 0) {
					curr++
					return {
						value: 'FizzBuzz😎',
						done: false
					}
				} else if (curr % 5 === 0) {
					curr++
					return {
						value: 'Buzz🐝',
						done: false
					}
				} else if (curr % 3 === 0) {
					curr++
					return {
						value: 'Fizz🥤',
						done: false
					}
				} else {
					curr++
					return {
						value: curr - 1,
						done: false
					}
				}
			} else {
				return {
					done: true
				}
			}
		}
	}
}
for (let numz of range) {
	console.log(numz)
}


//2) за допомогою генератора
function checkFizzBuzz(i) {
	if (i % 15 === 0) {
		return 'FizzBuzz😎'
	} else if (i % 5 === 0) {
		return 'Buzz🐝'
	} else if (i % 3 === 0) {
		return 'Fizz🥤'
	} else {
		return i
	}
};

function* fizzBuzzGenerator() {
	for (let i = 1; i <= 100; i++) {
		yield checkFizzBuzz(i)
	}
}

[...fizzBuzzGenerator()].forEach((numz) => console.log(numz))
*/

/* Задача 2 - генератор випадкових чисел
Напишіть функцію-генератор, яка генерує випадкові числа.
Функція приймає параметрами максимальне значення рандомного числа та кількість рандомних чисел які функція повертає:*/

function* generateRandomNumbers(max, quantity) {
	for (let i = 0; i < quantity; i++) {
		let randomNumber = Math.floor(Math.random() * max + 1)
		yield randomNumber
	}
}

// randomNumbers = generateRandomNumbers(100, 10)

// for (let rando of randomNumbers) {
// 	console.log(rando)
// }
[...generateRandomNumbers(100, 10)].forEach((rando) => console.log(rando))

