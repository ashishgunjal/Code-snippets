let string1 = "civia";
let string2 = "civic";

function palindrome(str) {
  let newStr = str.split("").reverse().join("");
  return str === newStr ? true : false;
}

console.log(palindrome(string1));
console.log(palindrome(string2));

//

function fnPalindrome(str) {
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[len - 1]) {
      return false;
    }
    len--;
  }
  return true;
}

console.log(fnPalindrome(string2));
