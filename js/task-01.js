// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const numberOfCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategoriesEl.length}`);

//  Варіант 1

// const categoriyAndEl = numberOfCategoriesEl.forEach(el =>
//     console.log(` Category: ${el.firstElementChild.textContent}\n Elements: ${el.lastElementChild.children.length}`))

//  Варіант 2

const categoriyAndEl = numberOfCategoriesEl.forEach(el =>
  console.log(
    ` Category: ${el.querySelector('h2').textContent}\n Elements: ${
      el.querySelectorAll('li').length
    }`
  )
);
