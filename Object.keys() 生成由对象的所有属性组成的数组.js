/*Object.keys() 方法传入一个对象作为参数，来生成包含对象所有键的数组。 
这个方法将对象作为参数并返回代表对象中每个属性的字符串数组。*/

//请完成 getArrayOfUsers 函数的实现，使其返回一个由输入对象中的所有属性所组成的数组。

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // 只修改这一行下面的代码
  return Object.keys(obj);
    // 只修改这一行上面的代码
  }
  
  console.log(getArrayOfUsers(users));