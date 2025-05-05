function averageOfSubarraysOfSizeK(arr, k) {
    let sum = 0;
    let avergageArr = [];

    // Calculate the sum of the first window
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    avergageArr.push(sum / k);
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k]; // Add next element, remove first element of the window
        avergageArr.push(sum / k);
    }

    return avergageArr;
}

console.log(averageOfSubarraysOfSizeK([2, 1, 5, 1, 3, 2], 3));
