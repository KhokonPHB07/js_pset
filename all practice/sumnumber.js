// 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।

// n(n+1)/2;

function positiveSummation(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }

    return sum;
}

// let addition=positiveSummation(500);
// console.log(addition);

