let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
];

const getMonthName = monthNumber => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    // no russian language available from the box
    return date.toLocaleString('en-US', { month: 'long' });
}

expencesExamples.forEach((expencesExample, i) => {
    expencesExample["yearlyExpences"].forEach((yearlyExpence, j) => {
        // console.log(yearlyExpence);

        if (yearlyExpence <= 1000) {
            console.log(`Для затрат под номеров ${i + 1} в месяце "${getMonthName(j)}" затраты были меньше или равны 1000`);
        }
    });
});