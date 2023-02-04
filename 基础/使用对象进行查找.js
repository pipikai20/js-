/*对象和字典一样，可以用来存储键/值对。 
如果数据是扁平的，你可以用对象来查找你想
要的值，而不是链式使用 switch 或 if/e
lse 语句。 当你知道你的输入数据在某个范围时，这种查找方式极为有效*/

  
    // 只修改这一行下面的代码
    /*switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }
  
    // 只修改这一行上面的代码
    return result;
  }
  
  phoneticLookup("charlie");*/


  function phoneticLookup(val) {
    var result = "";
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };

  
  
    result = lookup[val];
      return result;
}
  