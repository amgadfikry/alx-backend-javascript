# 0x04-TypeScript

### Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TS scripts will be checked with jest (version 24.9.* )
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the ts extension when possible
- The Typescript compiler should not show any warning or error when compiling your code

### Tasks

#### task_0
Copy the following configuration files (provided above) into the task_0 directory: package.json, .eslintrc.js, tsconfig.json, webpack.config.js
Write your code in the main.ts file:
- Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
- Create two students, and create an array named studentsList containing the two variables
- Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
- Each row should contain the first name of the student and the location
Requirements:
- When running, Webpack should return No type errors found.
- Every variable should use TypeScript when possible.

#### task_1
1. Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js
- firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
- fullTimeEmployee(boolean) this attribute should always be defined
- yearsOfExperience(number) this attribute is optional
- location(string) this attribute should always be defined
- Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

2. Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

3. Write a function printTeacher:
- It accepts two arguments firstName and lastName
- It returns the first letter of the firstName and the full lastName
- Example: printTeacher("John", "Doe") -> J. Doe
Write an interface for the function named printTeacherFunction.

4. Write a Class named StudentClass:
- The constructor accepts firstName(string) and lastName(string) arguments
- The class has a method named workOnHomework that return the string Currently working
- The class has a method named displayName. It returns the firstName of the student
- The constructor of the class should be described through an Interface
- The class should be described through an Interface
Requirements:
- You can reuse the Webpack configuration from the previous exercise to compile the code.
- When running npm run build, no TypeScript error should be displayed.
- Every variable should use TypeScript when possible.

#### task_2
1. Create the DirectorInterface interface with the 3 expected methods:
- workFromHome() returning a string
- getCoffeeBreak() returning a string
- workDirectorTasks() returning a string
Create the TeacherInterface interface with the 3 expected methods:
- workFromHome() returning a string
- getCoffeeBreak() returning a string
- workTeacherTasks() returning a string
Create a class Director that will implement DirectorInterface
- workFromHome should return the string Working from home
- getToWork should return the string Getting a coffee break
- workDirectorTasks should return the string Getting to director tasks
Create a class Teacher that will implement TeacherInterface
- workFromHome should return the string Cannot work from home
- getCoffeeBreak should return the string Cannot have a break
- workTeacherTasks should return the string Getting to work
Create a function createEmployee with the following requirements:
- It can return either a Director or a Teacher instance
- It accepts 1 arguments:
- salary(either number or string)
- if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director

2. Write a function isDirector:
- it accepts employee as an argument
- it will be used as a type predicate and if the employee is a director
Write a function executeWork:
- it accepts employee as an argument
- if the employee is a Director, it will call workDirectorTasks
- if the employee is a Teacher, it will call workTeacherTasks

3. Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:
- it takes todayClass as an argument
- it will return the string Teaching Math if todayClass is Math
- it will return the string Teaching History if todayClass is History

#### task_3
1. Create a directory called task_3 and copy these configuration files into it: package.json, webpack.config.js, tsconfig.json.
The first part of will require that you build an interface and a type. Inside a file named interface.ts:
- Create a type RowID and set it equal to number
- Create an interface RowElement that contains these 3 fields:
-- firstName: string
-- lastName: string
-- age?: number
You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can’t write a connector to the database, and you decided to download a library called crud.js. Copy this file into the task_3/js directory.
Here it is
