// Sum Digits · День 2 · 10 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию sumDigits(n), которая возвращает сумму цифр целого числа.
// У отрицательных чисел минус просто не учитывается.
//
//   sumDigits(2014) → 7
//   sumDigits(-38)  → 11
//
// Подсказка: число можно превратить в строку и пройтись по её символам,
// а можно обойтись арифметикой: % 10 и Math.floor.
//
// Как проверить себя: запустите `node sum-digits.js` в терминале
// или скопируйте весь файл в консоль браузера.

function sumDigits(n) {
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

check('sumDigits(2014)', sumDigits(2014), 7);
check('sumDigits(-38)', sumDigits(-38), 11);
check('sumDigits(5)', sumDigits(5), 5);
check('sumDigits(99999)', sumDigits(99999), 45);
check('sumDigits(-1000001)', sumDigits(-1000001), 2);
check('sumDigits(0)', sumDigits(0), 0);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
