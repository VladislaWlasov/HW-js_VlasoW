// Task 2
// 1. x^2 - 6x + 9 = 0


const a1 = 1, b1 = -6, c1 = 9; // Задаем переменные 
const discriminant1 = b1**2 - 4*a1*c1; // формула дискриминанта
if (discriminant1 > 0) {
    const root1 = (-b1 + Math.sqrt(discriminant1)) / (2*a1);
    const root1_2 = (-b1 - Math.sqrt(discriminant1)) / (2*a1)
    console.log("Уравнение 1 имеет два корня: ", root1); // 3
} 
else if (discriminant1 == 0) {
    const root1_3 = (-b1)/ (2*a1);
    console.log("Уравнение 1 имеет один корень:", root1_3)
}
else {
    console.log("Уравнение 1 не имеет корней");
}

// 2. x^2 - 4x - 5 = 0
const a2 = 1, b2 = -4, c2 = -5;
const discriminant2 = b2**2 - 4*a2*c2;
if (discriminant2 > 0) {
    const root2 = (-b2 + Math.sqrt(discriminant2)) / (2*a2);
    const root2_2 = (-b2 - Math.sqrt(discriminant2)) / (2*a2);
    console.log("Уравнение 2 имеет два корня: ", root2, "и", root2_2); // 5 и -1
} else if (discriminant2=0) {
    const root2_3 = (-b2)/(2*a2)
    console.log("Уравнение 2 имеет один корень", root2_2);
} 
else{
    console.log("Уравнение 2 не имеет корней");
}
