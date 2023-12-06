interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
  location: 'London',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 19,
  location: 'Paris',
};

const studentsList : Student[] = [student1, student2];

const body = document.querySelector('body') as HTMLBodyElement;
const table = document.createElement('table') as HTMLTableElement;
const thead = document.createElement('thead') as HTMLTableSectionElement;
const tbody = document.createElement('tbody') as HTMLTableSectionElement;
const trHead = document.createElement('tr') as HTMLTableRowElement;
trHead.innerHTML = '<th>firstName</th><th>location</th>';
thead.appendChild(trHead);
table.appendChild(thead);
studentsList.forEach((student) => {
  const trBody = document.createElement('tr') as HTMLTableRowElement;
  trBody.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  tbody.appendChild(trBody);
});
table.appendChild(tbody);
body.appendChild(table);
