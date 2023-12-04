/* eslint-disable */
export default function updateStudentGradeByCity(arr, city, newGrades) {
  const data = arr.map((el) => {
    const gradeObj = newGrades.filter((g) => g.studentId === el.id);
    if (gradeObj.length > 0) {
      el.grade = gradeObj[0].grade;
    } else {
      el.grade = 'N/A';
    }
    return el;
  });
  return data.filter((el) => el.location === city);
}
