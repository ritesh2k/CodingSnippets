const originalArray = [200, 12, 354, 123, 11, 3, 23, 3534, 12313, 112, -1];

const bubbleSort = arr => {
    for (let index = 0; index < arr.length; index++) {
        for (let compareIndex = 0; compareIndex < arr.length - index - 1; compareIndex++) {
            // we decrease the camparision window by 1 as larger element will be bubbled to the end
            if (arr[compareIndex] > arr[compareIndex + 1]) {
                //if current element is larger than next, swap them
                let temp = arr[compareIndex];
                arr[compareIndex] = arr[compareIndex + 1];
                arr[compareIndex + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(`Sorted Array`, bubbleSort(originalArray));

// instead of using two for loop using one for and one  do while loop
// function bubbleSort(arr) {
//   let swap;
//   do {
//     swap = false;
//     for (let i = 0; i < arr.length - 1 ; i++) {
//       if (arr[i] > arr[i + 1]) {
//       let  temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swap = true;
//       }
//     }
//   } while (swap);
//   return arr;
// }

// console.log(bubbleSort([8, -2, 6, 0, 5, -22, 33,1,4,4]))
