module.exports = function test(testFunction, testCases) {
  console.log(testFunction.name);

  testCases.forEach((testCase) => {
    console.log(`given ${JSON.stringify(...testCase.input)}`);

    const result = testFunction(...testCase.input);

    if (JSON.stringify(result) !== JSON.stringify(testCase.answer))
      throw new Error(
        `expected ${JSON.stringify(testCase.answer)}, got ${JSON.stringify(
          result
        )} instead.`
      );
    console.log(`${JSON.stringify(result)} ✔️`);
  });
};
