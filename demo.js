function table(row){
    var str = "";
    for(var i=1;i<=row;i++){
        for(var j=1;j<=i;j++){
          str += j + "*" + i + "=" + i*j + " ";
          if(i === j){
            str += "\n";
          }
        }
      }
      return str
}

console.log(table(9));