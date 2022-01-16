/*
Simplify an Object by Two Properties

You were tasked with making a list of every makeup item your local pharmacy had in stock. You created a very long array of each item, with each element having both a name and brand property. Now you're looking to simplify the list by combining duplicate items, and adding a count property to everything.
Example

simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]) ➞ [
  { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
  { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
]

Notes

    There will always be one or more element in the given array.
    Each element will always have a brand and name property.
    All duplicates will be displayed in order.
*/

const simplifyObject = (arr) => {
    const simplifiedArr = [];
    const simpleObj = arr.reduce((map, item) => {
        if (!map.get(item.name)) {
            map.set(item.name, { ...item, count: 1 });
        } else {
            map.set(item.name, { ...item, count: map.get(item.name).count + 1 });
        }
        return map;
    }, new Map());
    for (const value of simpleObj.values()) {
        simplifiedArr.push(value);
    }
    console.log(`simplifiedArr`, simplifiedArr);
};

const productList1 = [
    { brand: 'NARS', name: 'Cosmetics Voyageur Pallete' },
    { brand: 'NARS', name: 'Cosmetics Voyageur Pallete' },
    { brand: 'Urban Decay', name: 'Naked Honey Pallete' },
    { brand: 'Stila', name: 'Stay All Day Liquid Lipstick' },
    { brand: 'Stila', name: 'Stay All Day Liquid Lipstick' },
    { brand: 'Stila', name: 'Stay All Day Liquid Lipstick' }
];
const productList2 = [
    { brand: 'NARS', name: 'Cosmetics Voyageur Pallete' },
    { brand: 'NARS', name: 'Cosmetics Voyageur Pallete' },
    { brand: 'Urban Decay', name: 'Naked Honey Pallete' },
    { brand: 'Urban Decay', name: 'Naked Honey Pallete' },
    { brand: 'Urban Decay', name: 'Naked Honey Pallete' },
    { brand: 'Stila', name: 'Stay All Day Liquid Lipstick' },
    { brand: 'Stila', name: 'Stay All Day Liquid Lipstick' },
    { brand: 'Stila', name: 'Stay All Day Liquid Lipstick' },
    { brand: 'Stila', name: 'Stay All Day Liquid Lipstick' }
];

simplifyObject(productList1);
simplifyObject(productList2);
