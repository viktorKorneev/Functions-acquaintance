// function bark(name, weight) {
//   //Имя фукции и (параметры функции)
//   if (weight > 20) {
//     // Блок кода тело функции, в теле функции описываем что будет-
//     console.log(name + " says WOOF WOOF"); // -просходить с параметрами.
//   } else {
//     console.log(name + " says woof woof");
//   }
// }
// bark("rover", 23); // Вызываем функцию по имени. Оператор вызовая функции ()
// bark("spot", 3); // Передаём в качестве значений аргументы имя собаки и вес
// bark("spike", 53); // Передаём аргументы в правильном порядке, параметры === аргументы
// bark("lady", 17);

// function makeTea(cups, tea) {
//     console.log("Brewing " + cups + " cups of " + tea);
// }

// // правильный вызов функции
// makeTea(3, "Early Grey")

// // недостающие аргументы функции
// makeTea(3)       // undefined

// // "лишние" аргументы функции
// makeTea(3, "Early Grey", "hey ma!", 42);

// // агрументы переданы в неверном порядке
// makeTea("Early Grey", 3)

// // функция без параметров
// function barkAtTheMoon() {
//     console.log("Woooooooooooooooooooo!");
// }
// barkAtTheMoon();

// deposit
const depositAmount = 1000
const yearlyRate = 15
const depositTermInYears = 2

let depositIncome = 0
let count = 0

while (count < depositTermInYears) {
    depositIncome = depositIncome + depositAmount * (yearlyRate / 100)
    count  = count + 1
}

function getDepositIncome(amount, rate, term) {

}
// total

console.log(depositIncome);