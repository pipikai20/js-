/*splice() 可以让我们从数组中的任意位置连续删除任意数量的元素。
splice() 最多可以接受 3 个参数，但现在我们先关注前两个。 splice() 的前两个参数是整数，表示数组中调用 
splice() 的项的索引或位置。 别忘了，数组的索引是从 0 开始的，所以我们要用 0 来表示数组中的第一个元素。 
splice() 的第一个参数代表从数组中的哪个索引开始移除元素，而第二个参数表示要从数组中的这个位置开始删除多少个元素。 例如：*/



let array1 = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
//这里我们移除 2 个元素，首先是第三个元素（索引为 2）。 array 会有值 ['today', 'was', 'great']。

//splice() 不仅会修改调用该方法的数组，还会返回一个包含被移除元素的数组：
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
//newArray 值为 ['really', 'happy']。


/*调用 splice() 方法，索引为 (3) 的地方开始删除元素，删除的元素数量是 (1)。
然后，(13, 14) 是在删除位置插入的元素。
 可以在 amountToDelete 后面传入任意数量的元素（以逗号分隔），每个都会被插入到数组中。*/
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);