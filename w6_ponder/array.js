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