interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student_a: Student = {
    firstName: 'Kwenziwa',
    lastName: 'Khanyile',
    age: 29,
    location: 'Durban, KZN',
}
const student_b: Student = {
    firstName: 'Nompumelelo',
    lastName: 'Mhlongo',
    age: 22,
    location: 'Eshowe, KZN',
}

const myStudentList: Student[] = [student_a, student_b];
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

myStudentList.forEach((student: Student): void => {
	const myNewRow: HTMLTableRowElement = table.insertRow();
	const myNewRowFirstName: HTMLTableCellElement = myNewRow.insertCell();
	const myNewRowLocation: HTMLTableCellElement = myNewRow.insertCell();
	myNewRowFirstName.innerHTML = student.firstName;
	myNewRowLocation.innerHTML = student.location;
})