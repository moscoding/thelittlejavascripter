// Sum of Two · День 1 · 5 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Кассе нужна самая главная функция. Напишите функцию sum(a, b), которая
// возвращает сумму двух чисел — например, итог чека из двух покупок.
// Функция должна именно вернуть значение через return, а не напечатать его.
//   sum(2, 3)    → 5
//   sum(-4, 4)   → 0
//   sum(120, 75) → 195
//
// Как проверить себя: запустите `node sum-of-two.js` в терминале
// или скопируйте весь файл в консоль браузера.

function sum(a, b) {
  // ваш код
  return 0;
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

check('sum(2, 3)', sum(2, 3), 5);
check('sum(-4, 4)', sum(-4, 4), 0);
check('sum(120, 75)', sum(120, 75), 195);
check('sum(0.5, 0.25)', sum(0.5, 0.25), 0.75);
check('sum(sum(1, 2), 3)', sum(sum(1, 2), 3), 6);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
