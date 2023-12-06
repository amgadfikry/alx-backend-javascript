interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher( { firstName, lastName }: printTeacherFunction ): void {
  console.log(`${firstName[0]}. ${lastName}`);
}

printTeacher( { firstName: 'John', lastName: 'Doe' } );

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
  firstName;
  lastName;
  constructor( firstName: string, lastName: string ) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this.firstName;
  }
}

const student = new StudentClass( 'John', 'Doe' );
console.log( student.workOnHomework() );
console.log( student.displayName() );
