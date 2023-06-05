orderPasta: function(ing1,ing2,ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2},${ing3}`);
  }
};

const arr = [7,8,9];
const badNewArr = [1,2,arr[0], arr[1], arr[2]];

console.log(badNewArr);

const newArr = [1,2,...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

console.log(newMenu);
const mainMenuCopy = [
  ...restaurant.mainMenu
];

console.log(mainMenuCopy)

const menu = [...restaurant.starterMenu,
...restaurant.mainMenu];
console.log(...menu);

//array, string, maps, sets -->NOT objects

const str = 'János';
const letters = [...str, '','S.'];
console.log(letters);