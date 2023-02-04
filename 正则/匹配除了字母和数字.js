/*可以使用 \W 搜寻和 \w 相反的匹配模式。 
注意，相反匹配模式使用大写字母。 此缩写与 [^A-Za-z0-9_] 是一样的。*/

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);


let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // 修改这一行
let result = quoteSample.match(nonAlphabetRegex).length;