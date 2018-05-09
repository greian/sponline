/**
* @Method: Returns the string padded to the left with the input string.
* @Param {string, string}
* @Return {string}
*/
export function padLeft(input: string, padString: string) {
  if (input.length == 1) {
    input = padString + input;
  }
  return input;
}
