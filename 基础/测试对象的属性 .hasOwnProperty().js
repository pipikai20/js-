/*有时检查一个对象属性是否存在是非常有用的。
 我们可以用对象的 .hasOwnProperty(propname) 
 方法来检查对象是否有指定的属性。 .hasOwnProperty() 找到该属性时返回 true，找不到该属性时返回 false。*/


 const myObj = {
    top: "hat",
    bottom: "pants"
  };
  
  myObj.hasOwnProperty("top");
  myObj.hasOwnProperty("middle");



  function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
  }