

function mergeSort(array) {
    console.log("This was printed recursively");
    if(array.length <= 1) {
        return array;
    } 
    const arrayLength = Math.floor(array.length / 2);
    let firtSplit = array.slice(0, arrayLength);
    let secondSplit = array.slice(arrayLength);
    
    return merge(mergeSort(firtSplit), mergeSort(secondSplit));
} 

function merge(firtSplit, secondSplit) {
    let results = [];
    let first = 0;
    let second = 0;

    while(first < firtSplit.length && second < secondSplit.length) {
        if(firtSplit[first] < secondSplit[second]) {
            results.push(firtSplit[first]);
            first++;
        } else {
            results.push(secondSplit[second]);
            second++;
        }
    }
    return results.concat(firtSplit.slice(first)).concat(secondSplit.slice(second));    
}

console.log(mergeSort(fibRec(8)));