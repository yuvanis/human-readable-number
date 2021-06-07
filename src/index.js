module.exports = function toReadable (number) {
    let numeral = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    let ten = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];
    let arr = [];
    let i = 0;
    let j = number % 100;
    let k = number % 10;
    if (number == 0){
        arr.push("zero");
    }
    if (number > 99){
        i = Math.floor(number / 100);
        arr.push(numeral[i] + " hundred");
    }
    if (j != 0){
    if (j >= 20){
        arr.push(ten[Math.floor(j / 10) - 2]);
        if (k % 10 > 0){
            arr.push(numeral[k % 10]);
        }
    }
    if (j < 20){
        arr.push(numeral[j]);
        }
    }
    return arr.join(' ');
}
