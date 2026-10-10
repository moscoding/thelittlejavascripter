// Smart Sort · День 2 · 15 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Попробуйте в консоли: [10, 9, 1].sort() даёт [1, 10, 9]. Дело в том, что без
// аргументов sort сравнивает элементы как строки, посимвольно, а '1' < '9',
// поэтому '10' оказывается раньше '9'. К тому же sort меняет исходный массив.
//
// Напишите функцию sortNumbers(numbers), которая возвращает НОВЫЙ массив,
// отсортированный по возрастанию как числа, а исходный оставляет как был.
//
//   sortNumbers([10, 9, 1]) → [1, 9, 10]
//
// Подсказка: sort принимает функцию сравнения, а копию массива даст slice().
//
// Как проверить себя: запустите `node smart-sort.js` в терминале
// или скопируйте весь файл в консоль браузера.

function sortNumbers(numbers) {
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

check('sortNumbers([10, 9, 1])', sortNumbers([10, 9, 1]), [1, 9, 10]);
check('с отрицательными', sortNumbers([3, -20, 0, -1]), [-20, -1, 0, 3]);
check('разное число цифр', sortNumbers([100, 25, 3, 1000]), [3, 25, 100, 1000]);
check('дробные', sortNumbers([2.5, 10, 2]), [2, 2.5, 10]);
check('пустой массив', sortNumbers([]), []);
const input = [5, 100, 20];
sortNumbers(input);
check('исходный массив не изменился', input, [5, 100, 20]);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
