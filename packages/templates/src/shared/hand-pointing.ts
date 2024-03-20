export const toHandPointing = (input: Array<Array<string>>): string => {
  return JSON.stringify([
    [input[0][0], null, input[0][1], null, input[0][2]],
    [null, null, null, null, null],
    [input[1][0], null, input[1][1], null, input[1][2]],
  ]);
};
