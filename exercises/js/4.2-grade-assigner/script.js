const gradeAssigner = () => {
  const grade = prompt('What is your grade?');
  if (grade <= 64) return 'F';
  if (grade < 70) return 'D';
  if (grade < 80) return 'C';
  if (grade < 90) return 'B';
  return 'A';
};

console.log(gradeAssigner());
