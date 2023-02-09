// [1,3,5,7,9]
const arr = [1,3,9,7,5];

function miniMaxSum( arr ){
    arr.sort();
    let minSum =0;
    let maxSum =0;
    //Min Sum
    arr.slice(0,4).forEach(num=> minSum += num);
    //Max sum
    arr.slice(1).forEach(num=> maxSum += num);

    console.log(`${minSum} ${maxSum}`);
}

miniMaxSum(arr);