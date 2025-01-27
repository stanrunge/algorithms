function isPalindrome(s: string): boolean {
  const input = s.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
  let p1 = 0;
  let p2 = input.length - 1;

  while (p1 <= p2) {
    if (input[p1] != input[p2]) {
      return false;
    }

    p1++;
    p2--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
