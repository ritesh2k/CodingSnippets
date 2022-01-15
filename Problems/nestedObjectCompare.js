// Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.
// Examples

// getObject({
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 17, name: "julie", marks: "400" },
//   "2": { age: 16, name: "Robin", marks: "200" },
//   "3": { age: 16, name: "Bella", marks: "300" }
// }) ➞ {
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 16, name: "Robin", marks: "200" },
//   "2": { age: 16, name: "Bella", marks: "300" }
// }

const nesTedObjectCompare = (obj) => {
    const objToArray = Object.values(obj);
    const map = objToArray.reduce((obj, item) => {
        if (!obj.get(item.marks) || obj.get(item.marks).age < item.age) obj.set(item.marks, item);
        return obj;
    }, new Map());

    const UniqueObj = {};
    let index = 0;
    for (const value of map.values()) {
        UniqueObj[index] = value;
        index++;
    }
    console.log(`UniqueObj`, UniqueObj);
};

const theObj = {
    0: { age: 18, name: 'john', marks: '400' },
    1: { age: 17, name: 'julie', marks: '400' },
    2: { age: 16, name: 'Robin', marks: '200' },
    3: { age: 16, name: 'Bella', marks: '300' }
};

const theOtherObj = {
    0: { age: 18, name: 'john', marks: '400' },
    1: { age: 17, name: 'julie', marks: '400' },
    2: { age: 16, name: 'Robin', marks: '200' },
    3: { age: 16, name: 'Bella', marks: '300' },
    4: { age: 16, name: 'john', marks: '250' },
    5: { age: 15, name: 'julie', marks: '250' }
};

nesTedObjectCompare(theObj);
nesTedObjectCompare(theOtherObj);
