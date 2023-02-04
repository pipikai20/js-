/*不仅可以 shift（移出）数组中的第一个元素，也可以 unshift（移入）一个元素到数组的头部。

.unshift() 函数用起来就像 .push() 函数一样，但不是在数组的末尾添加元素，unshift() 在数组的头部添加元素*/
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");