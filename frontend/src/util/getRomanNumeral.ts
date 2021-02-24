// I would usually search for a library on npm to import for something like this
// but I wrote my own little function here just for the purpose of having
// a plain function to write a unit test for instead of a react component
export default function getRomanNumeral(n: number): string {
  switch (n) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
    default:
      return '?';
  }
}
