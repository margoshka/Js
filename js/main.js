
function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var arr = [];
for (var i = 1; i <= 30; i++) {
    if(i% 2 === 0) {
        arr.push(rand (0,100))
    }
    else {
        arr.push(rand(-100,0))
    }
}
for (var i = 0; i < 30; i++){
    if (i % 5 === 0) {
        console.log(arr[i] );
    }
}