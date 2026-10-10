// Odd Numbers · День 1 · 15 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// По пруду плывут утки с номерами от 1 до n, а на берег выходят только
// утки с нечётными номерами. Напишите функцию oddNumbers(n), которая
// с помощью цикла собирает в массив все нечётные числа от 1 до n по порядку.
// Подсказка: число нечётное, если i % 2 === 1; добавить в массив — arr.push(i).
//   oddNumbers(7)  → [1, 3, 5, 7]
//   oddNumbers(10) → [1, 3, 5, 7, 9]
//   oddNumbers(0)  → []
//
// Как проверить себя: запустите `node odd-numbers.js` в терминале
// или скопируйте весь файл в консоль браузера.

function oddNumbers(n) {
  const result = [];
  // ваш код
  return result;
}

// ─── Проверка (не меняйте код ниже) ───
let passed = 0;
let total = 0;

function check(name, actual, expected) {
  total++;
  const got = JSON.stringify(actual);
  const want = JSON.stringify(expected);
  if (got === want) {
    passed++;
    console.log('✓ ' + name);
  } else {
    console.log('✗ ' + name + ' — получено ' + got + ', ожидалось ' + want);
  }
}

check('oddNumbers(7)', oddNumbers(7), [1, 3, 5, 7]);
check('oddNumbers(10)', oddNumbers(10), [1, 3, 5, 7, 9]);
check('oddNumbers(1)', oddNumbers(1), [1]);
check('oddNumbers(0)', oddNumbers(0), []);
check('oddNumbers(99).length', oddNumbers(99).length, 50);
check('последняя утка из 100', oddNumbers(100)[49], 99);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
