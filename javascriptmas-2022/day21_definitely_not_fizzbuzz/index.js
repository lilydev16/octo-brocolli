function awardBonuses() {
  const employees = [...Array(101).keys()].slice(1);
  const prizes = employees.forEach((e) => {
    e % 3 === 0 && e % 5 === 0
      ? console.log(`${e} - JACKPOT! 1 Million and a Yacht!`)
      : e % 3 === 0
      ? console.log(`${e} - Vacation!`)
      : e % 5 === 0
      ? console.log(`${e} - $100,000 bonus!`)
      : console.log(`${e} - :(`);
  });
}

awardBonuses();
