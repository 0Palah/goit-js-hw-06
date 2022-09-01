// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const counterValueEl = document.querySelector('#value');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
let counterValue = 0;
decrementBtnEl.addEventListener('click', () => {
    counterValueEl.textContent = counterValue -= 1;
});
incrementBtnEl.addEventListener('click', () => {
    counterValueEl.textContent = counterValue += 1;
});


// console.log(counterValueEl);
// console.log(decrementBtnEl);
// console.log(incrementBtnEl);
// console.log(counterValue);