// Variables & Condicionales

function solveEven() {
    function isEven(num) {
        return num % 2 === 0 ? "Es par" : "Es impar";
    }

    document.getElementById("outputEven").textContent = `
    4: ${isEven(4)}\n
    7: ${isEven(7)}
    `;
}

function solveGrade() {
    function gradeLevel(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }

    document.getElementById("outputGrade").textContent = `
    85: ${gradeLevel(85)}\n
    72: ${gradeLevel(72)}
    `;
}

function gradeLevel(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

// Ciclos

function solvePrintNumbers() {
    function printNumbers() {
        let numbers = '';
        for (let i = 1; i <= 10; i++) {
            numbers += i + ' ';
        }
        return numbers.trim();
    }

    document.getElementById("outputPrintNumbers").textContent = printNumbers();
}

function solveSumEvenNumbers() {
    function sumEvenNumbers() {
        let sum = 0;
        for (let i = 1; i <= 50; i++) {
            if (i % 2 === 0) {
                sum += i;
            }
        }
        console.log(sum)
        return sum;
    }

    document.getElementById("outputSumEvenNumbers").textContent = sumEvenNumbers();
}
// Arreglos

function solveFindMax() {
    function findMax(arr) {
        return Math.max(...arr);
    }

    document.getElementById("outputFindMax").textContent = findMax([3, 5, 7, 2, 8]);
}

function solveReverseArray() {
    function reverseArray(arr) {
        return arr.reverse();
    }

    document.getElementById("outputReverseArray").textContent = reverseArray([1, 2, 3, 4, 5]);
}

// Funciones

function solveMultiply() {
    function multiply(a, b) {
        return a * b;
    }

    document.getElementById("outputMultiply").textContent = multiply(3, 4);
}

function solveCalculateArea() {
    function calculateArea(base, height) {
        return (base * height) / 2;
    }

    document.getElementById("outputCalculateArea").textContent = calculateArea(5, 10);
}

// JSON

function solveGenerateStudentJSON() {
    function generateStudentJSON(name, age, grades) {
        const student = {
            name: name,
            age: age,
            grades: grades
        };
        return JSON.stringify(student, null, 2);
    }

    const studentJSON = generateStudentJSON("Ana", 20, [85, 90, 78]);
    document.getElementById("outputGenerateStudentJSON").textContent = studentJSON;
}

function solveProcessStudentData() {
    function processStudentData(studentJSON) {
        const student = JSON.parse(studentJSON);
        const isAdult = student.age >= 18;
        const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;

        function gradeLevel(score) {
            if (score >= 90) return "A";
            if (score >= 80) return "B";
            if (score >= 70) return "C";
            if (score >= 60) return "D";
            return "F";
        }

        const finalGrade = gradeLevel(averageGrade);

        return JSON.stringify({
            name: student.name,
            isAdult: isAdult,
            averageGrade: averageGrade,
            finalGrade: finalGrade
        }, null, 2);
    }

    const studentData = {
        name: "Carlos",
        age: 19,
        grades: [88, 92, 76, 81]
    };

    const processedData = processStudentData(JSON.stringify(studentData));
    document.getElementById("outputProcessStudentData").textContent = processedData;
}




/*
    1. Crear función que procese la información de un estudiante
    2. Debe tener 3 paramatros o 3 argumentos
    3. Determinar si su edad es mayor de 18 o no
    4. Calcular el promedio de calificaciones
    5. Determinar el rango de la calificación final
    6. Devolver un objeto json con la información
*/
const calificacion = [20, 30, 100, 25, 70, 80]
function proccessStudentData(nombre, edad, calificacion) {
    const esMayorEdad = edad >= 18
    let promedio;
    let sumaCalificaciones = 0
    for (let i = 0; i <= calificacion.length; i++) {
        sumaCalificaciones += calificacion[i]
    }

    promedio = sumaCalificaciones / calificacion.length

    const rangoPromedio = gradeLevel(promedio)

    const informacionEstudiante = {
        nombre: nombre,
        edad: esMayorEdad ? "Es mayor de edad" : "Es menor de edad",
        calificacion: rangoPromedio,
    }

    return informacionEstudiante

}

console.log(proccessStudentData("Daniela", 27, calificacion))




