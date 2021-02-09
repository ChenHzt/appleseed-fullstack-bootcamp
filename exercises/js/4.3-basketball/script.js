const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const printWinner = (group1Name, group1avg, group2Name, group2avg) => {
  if (group1avg > group2avg) {
    console.log(`${group1Name}'s group won with avg of ${group1avg}`);
    return 1;
  }
  if (group1avg < group2avg) {
    console.log(`${group1Name}'s group won with avg of ${group2avg}`);
    return 2;
  }
  console.log(`There is a draw with avg of ${group1avg}`);
  return 0;
};

printWinner('John', calcAvg(89, 120, 103), 'Mike', calcAvg(116, 94, 123));
printWinner('John', calcAvg(50, 100, 105), 'Mike', calcAvg(50, 100, 105));
printWinner('John', calcAvg(117, 123, 123), 'Mike', calcAvg(116, 94, 123));
