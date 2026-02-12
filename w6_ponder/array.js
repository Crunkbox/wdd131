const numbers = ['one', 'two', 'three'];

const myList = document.querySelector('#myList');

console.log(myList);

const myNewList = numbers.map((number) => {
    const item = `<li>${number}</li>`;
    return item;
});

console.log(myNewList);
myList.innerHTML = myNewList.join('');

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
console.log(students)

const studentContainer = document.querySelector('#studentContainer');
console.log(studentContainer);

const studentHTML = students.map(student => {
    return `
        <div class = "student">
            <p>${student.first} ${student.last}</p>
            <hr>
        </div>
    `;
});

studentContainer.innerHTML = studentHTML.join('');


function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
          
const grades = ['A', 'B', 'C', 'D'];

const gradePoints = grades.map(convert);

console.log(gradePoints);

const GPAPoints = gradePoints.reduce((total, points) => total + points);
console.log(GPAPoints);

const gpa = GPAPoints / gradePoints.length;

console.log(gpa)


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const filterFruits = words.filter((fruit) => {
    return fruit.length >= 6;
});

console.log(filterFruits);

words.forEach((fruit) => {
    console.log(`This index is of ${fruit} is ${words.indexOf(fruit)}`);
});