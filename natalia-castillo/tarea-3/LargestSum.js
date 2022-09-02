function largestPairSum (numbers) {
    let Sum
    numbers.sort((a, b) => b - a);
    Sum = numbers[0] + numbers[1];
    return Sum;
}