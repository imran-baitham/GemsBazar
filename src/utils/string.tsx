/**
 * Iterates over each parameter provided to the function as a
 * string and joins them together with a space.
 * - If `classes` contains elements that are not strings, they will be removed.
 */
export const classNames = (...classes: string[]) => {
  return classes.filter((c) => typeof c === "string").join(" ");
}
