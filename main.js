let dogName = "rover";
let dogWeight = 23;
if (dogWeight > 20) {
    console.log(dogName + " says WOOF WOOF");
} else {
    console.log(dogName + " says woof woof");
}
 dogName = "spot";
 dogWeight = 13;
if (dogWeight > 20) {
    console.log(dogName + " says WOOF WOOF");
} else {
    console.log(dogName + " says woof woof");
}
 dogName = "spike";
 dogWeight = 53;
if (dogWeight > 20) {
    console.log(dogName + " says WOOF WOOF");
} else {
    console.log(dogName + " says woof woof");
}
 dogName = "lady";
 dogWeight = 17;
if (dogWeight > 20) {
    console.log(dogName + " says WOOF WOOF");
} else {
    console.log(dogName + " says woof woof");
}

function bark (name, weight) { //Имя фукции и (параметры функции)
    if (weight > 20) {                           // Блок кода тело функции, в теле функции описываем что будет- 
        console.log(name + " says WOOF WOOF");   // -просходить с параметрами.
    } else {
        console.log(name + " says woof woof");
    }
}
bark("rover", 23) // Вызываем функцию по имени. Оператор вызовая функции () 
                    // Передаём в качестве параметров имя собаки и вес
