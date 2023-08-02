import { capitalize } from "./capitalize";

test("Capitalizes the first letter of a string", () => {
  expect(capitalize("mario Lopez")).toBe("Mario Lopez");
});
