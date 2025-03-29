function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
This solution uses a two-pointer technique to check if the word reads the 
ame forwards and backwards. The `left` pointer starts at the beginning of the word, 
 and the `right` pointer starts at the end. We compare characters at these positions, 
moving towards the center. If any pair doesn't match, we immediately know it's not a palindrome. 
If all pairs match, we confirm it's a palindrome.
*/

// You can run `node index.js` to view these console logs
/*if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;*/

function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) return false;
    left++;
    right--;
  }
  return true;
}//

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;


function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}