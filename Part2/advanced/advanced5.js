/* Advanced Practice 5 */

/**
 * Advanced Practice 5: assign objects to students
 */

function practice_5(students, student_objects) {
  students.forEach((item) => {
    item.objects = [];
  });
  student_objects.reduce((acc, item) => {
    const targetIndex = acc.findIndex(
      (target) => target.student_id === item.student_id
    );
    console.log(item.student_id, targetIndex);
    if (targetIndex !== undefined) {
      acc[targetIndex].objects.push(item["Object"]);
    }
    return students;
  }, students);
  return students;
}

const students = [
  { student_id: 1, name: "Arthur" },
  { student_id: 2, name: "Peter" },
  { student_id: 3, name: "Molly" },
];

const student_objects = [
  { student_id: 1, Object: "pen" },
  { student_id: 2, Object: "pen" },
  { student_id: 3, Object: "book" },
  { student_id: 1, Object: "book" },
  { student_id: 3, Object: "phone" },
];

console.log(practice_5(students, student_objects));

// expected output:
// [
//   { student_id: 1, name: "Arthur", objects: ["pen", "book"] },
//   { student_id: 2, name: "Peter", objects: ["pen"] },
//   { student_id: 3, name: "Molly", objects: ["book", "phone"] },
// ];
