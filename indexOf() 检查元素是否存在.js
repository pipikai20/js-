/*这个方法让我们可以方便地检查某个元素是否存在于数组中。 
indexOf() 方法接受一个元素作为输入参数，并返回该元素在数组中的位置（索引）；
若该元素不存在于数组中则返回 -1。*/


let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');


//通过 indexOf() 方法修改这个函数，使得当传入的参数在数组中存在时返回 true，否则返回 false。
function quickCheck(arr, elem) {
    // 只修改这一行下面的代码
  if(arr.indexOf(elem)>=0){
    return true;
  }else{
    return false;
  }
    // 只修改这一行上面的代码
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));



  
  //用一个 for 循环来做筛选，使函数返回一个由 arr 中不包含 elem 的数组所组成的新数组。
function filteredArray(arr, elem) {
    let newArr = [];
    // 只修改这一行下面的代码
  for (let i=0;i< arr.length; i++ ){
    if(arr[i].indexOf(elem)==-1){
  newArr.push(arr[i]);}
  }
  
    // 只修改这一行上面的代码
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));