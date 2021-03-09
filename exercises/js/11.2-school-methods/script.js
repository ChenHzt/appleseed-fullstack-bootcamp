/* eslint-disable no-plusplus */
const school = {
  teachers: [
    {
      id: 1,
      name: 'Pinchas',
      subjects: ['chemistry', 'biology', 'physics'],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: 'Williams',
      subjects: ['history', 'ethics'],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: 'Jennifer',
      age: 20,
    },
    {
      id: 11,
      name: 'Howard',
      age: 23,
    },
    {
      id: 12,
      name: 'Old-Timmy',
      age: 86,
    },
    {
      name: 'Houston',
      age: 21,
    },
  ],
};

const assignStudent = (studentID, subject) => {
  const teacher = school.teachers.find(
    (t) => t.capacityLeft > 0 && t.subjects.includes(subject)
  );
  if (teacher) {
    teacher.capacityLeft--;
    teacher.students.push(studentID);
  } else console.log('Sorry, no available teachers left');
};

const assignTeachersSubject = (teacherID, newSubject) => {
  const teacher = school.teachers.find((t) => t.id === teacherID);
  // eslint-disable-next-line no-unused-expressions
  teacher.subjects.includes(newSubject)
    ? null
    : teacher.subjects.push(newSubject);
};
assignTeachersSubject(2, 'biology');
console.log(school);
assignTeachersSubject(2, 'history');
console.log(school);

