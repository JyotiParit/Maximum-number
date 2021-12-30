var arr = [5, 7, 2, 8, 3, 6, 9, 1, 11, 10, 4];
var max = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
        max = arr[i];
    }
}
console.log(max);
