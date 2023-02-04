/*JavaScript 中与字母表匹配的最接近的元字符是\w。 这个缩写等同于[A-Za-z0-9_]。
 此字符类匹配大写字母和小写字母以及数字。 注意，这个字符类也包含下划线字符 (_)。*/

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);



let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // 修改这一行
let result = quoteSample.match(alphabetRegexV2).length;