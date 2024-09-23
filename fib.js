function fib(num) {
    let total = 0;
    let arr = [0, 1];

    for(let i = 0; i < num; i++) {
         
        total = arr[i] + arr[i + 1];
        arr.push(total);
       
    }
     return arr.slice(0, num);
}

function fibRec(num) {
    console.log("This was printed recursively");
    if(num <= 1) {
        return num === 0 ? [0] : [0, 1];
    }
    const arr = fibRec(num - 1);
     arr.push(arr[arr.length - 1]  + arr[arr.length - 2]);
    return arr.slice(0, num);
}

console.log(fibRec(8));

console.log(fib(13));


