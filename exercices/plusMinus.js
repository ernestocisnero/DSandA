const arr = [-4, 3, -9, 0, 4, 1];



function plusMinus(arr) {

    let plusCount = 0;
    let minusCount = 0;
    let ZeroCount = 0;
    for (let i = 0; i <= arr.length - 1; i++) {

        if (arr[i] == 0) {
            ZeroCount++;
        } else if (arr[i] < 0) {
            minusCount++;
        } else {
            plusCount++;
        }
    }

    console.log((plusCount / arr.length).toFixed(6));
    console.log((minusCount / arr.length).toFixed(6));
    console.log((ZeroCount / arr.length).toFixed(6));

}


plusMinus(arr);