function zeroArray(m, n) {
    // 创建一个二维数组，有 m 行 n 列，元素均为 0
    let newArray = [];
    
    for (let i = 0; i < m; i++) {
      // 添加第 m 行到 newArray
  let row = [];
      for (let j = 0; j < n; j++) {
        // 将 n 个 0 推入当前行以创建列
        
        row.push(0);
      }
      // 将当前行（已有 n 个 0）推送到数组
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  