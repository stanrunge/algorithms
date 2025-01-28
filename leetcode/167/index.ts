function twoSum(numbers: number[], target: number): number[] {
  let p1 = 0;
  let p2 = numbers.length - 1;

  while (numbers[p1] + numbers[p2] != target) {
    if (numbers[p1] + numbers[p2] < target) {
      p1++;
    } else {
      p2--;
    }
  }

  return [p1 + 1, p2 + 1];
}

console.log(twoSum([2, 7, 11, 15], 9));
