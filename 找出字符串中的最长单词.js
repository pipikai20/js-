/*返回给出的句子中，最长单词的长度。
函数的返回值应是一个数字。*/


function findLongestWordLength(str) {
    let words = str.split(' ');
     let maxLength = 0;
     for (let i = 0; i < words.length; i++) {
       if (words[i].length > maxLength) {
         maxLength = words[i].length;
       }
     }
     return maxLength;
   }
   findLongestWordLength("The quick brown fox jumped over the lazy dog");
