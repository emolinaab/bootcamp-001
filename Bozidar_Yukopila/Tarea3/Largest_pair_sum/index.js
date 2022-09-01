function largestPairSum(numbers) {

    let latest = Math.max(...numbers);

    let filtered = numbers.filter((item) => item !== latest);

    let latest2 = Math.max(...filtered);

    return latest + latest2;
}