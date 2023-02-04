//slice() 不会修改数组，而是会复制，或者说*提取（extract）*给定数量的元素到一个新数组。
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);

//利用 slice() 从输入的数组中提取信息，最终返回一个包含元素 warm 和 sunny 的新数组。
function forecast(arr) {
    // 只修改这一行下面的代码
  
    return arr.slice(2,4);
  }
  
  // 只修改这一行上面的代码
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


//slice() 可以让我们从一个数组中选择一些元素来复制到新数组中，展开运算符（spread operator），
//它能让我们方便地复制数组中的所有元素。 展开语法写出来是这样：...

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

//它接受 arr（一个数组）和 num（一个数字）作为输入参数。 该函数需要返回一个由 num 个 arr 组成的新的二维数组。