// Grocery Store · День 2 · 20 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// В магазине есть прайс-лист — объект «товар: цена» — и корзина покупателя:
// массив объектов { name, qty }. Напишите функцию calcTotal(prices, cart),
// которая считает сумму покупки. Товары, которых нет в прайс-листе,
// пропускайте — их просто не пробьют на кассе.
//
//   const prices = { хлеб: 45, молоко: 89, сыр: 320 };
//   calcTotal(prices, [{ name: 'хлеб', qty: 2 }, { name: 'сыр', qty: 1 }]) → 410
//
// Как проверить себя: запустите `node grocery-store.js` в терминале
// или скопируйте весь файл в консоль браузера.

function calcTotal(prices, cart) {
  // ваш код
  return null;
}

// ─── Проверка (не меняйте код ниже) ───
let passed = 0;
let total = 0;
function check(name, actual, expected) {
  total++;
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    passed++;
    console.log('✓ ' + name);
  } else {
    console.log('✗ ' + name + ' — ожидалось ' + JSON.stringify(expected) +
      ', получено ' + JSON.stringify(actual));
  }
}

const prices = { хлеб: 45, молоко: 89, сыр: 320 };
check('хлеб ×2 и сыр', calcTotal(prices, [{ name: 'хлеб', qty: 2 }, { name: 'сыр', qty: 1 }]), 410);
check('молоко ×3 и хлеб', calcTotal(prices, [{ name: 'молоко', qty: 3 }, { name: 'хлеб', qty: 1 }]), 312);
check('неизвестный товар пропускается', calcTotal(prices, [{ name: 'икра', qty: 1 }, { name: 'молоко', qty: 1 }]), 89);
check('количество 0', calcTotal(prices, [{ name: 'сыр', qty: 0 }]), 0);
check('пустая корзина', calcTotal(prices, []), 0);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
