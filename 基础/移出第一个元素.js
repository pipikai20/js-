//这时候我们就需要 .shift() 了。 它的工作原理就像 .pop()，但它移除的是第一个元素，而不是最后一个。
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(ourArray);