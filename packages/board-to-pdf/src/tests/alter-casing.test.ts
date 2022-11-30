import { alterCasing } from "..";

it("lowercase a string", () => {
  const result = alterCasing("RaNdOmCAsInG", "lower");

  expect(result).toBe("randomcasing");
});

it("uppercase a string", () => {
  const result = alterCasing("RaNdOmCAsInG", "upper");

  expect(result).toBe("RANDOMCASING");
});

it("no change a string", () => {
  const result = alterCasing("RaNdOmCAsInG", "no-change");

  expect(result).toBe("RaNdOmCAsInG");
});

it("capital case a single word", () => {
  const result = alterCasing("random", "capital");

  expect(result).toBe("Random");
});

it("capital case two words", () => {
  const result = alterCasing("random words", "capital");

  expect(result).toBe("Random Words");
});

it("capital case empty string", () => {
  const result = alterCasing("", "capital");

  expect(result).toBe("");
});

it("upper case empty string", () => {
  const result = alterCasing("", "upper");

  expect(result).toBe("");
});

it("lower case empty string", () => {
  const result = alterCasing("", "lower");

  expect(result).toBe("");
});

it("no-change case empty string", () => {
  const result = alterCasing("", "no-change");

  expect(result).toBe("");
});

it("capital case a string with a new line", () => {
  const result = alterCasing("random\nwords", "capital");

  expect(result).toBe("Random\nWords");
});

it("capital case a string with a new line and space", () => {
  const result = alterCasing("more random\nwords", "capital");

  expect(result).toBe("More Random\nWords");
});
