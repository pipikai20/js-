/*我们可以通过连续使用点号表示法和方括
号表示法来访问对象的嵌套属性。*/
const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  
  ourStorage.cabinet["top drawer"].folder2;
  ourStorage.desk.drawer;