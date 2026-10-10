// Minimal · День 1 · 10 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// График цен летит вниз — ищем самую низкую точку. Напишите две функции,
// не пользуясь Math.min:
//   min2(a, b)    — меньшее из двух чисел:  min2(7, 3) → 3
//   min3(a, b, c) — меньшее из трёх чисел:  min3(5, 9, -2) → -2
// Подсказка: min3 можно собрать из двух вызовов min2.
//
// Как проверить себя: запустите `node minimum.js` в терминале
// или скопируйте весь файл в консоль браузера.

function min2(a, b) {
  // ваш код
  return 0;
}

function min3(a, b, c) {
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

check('min2(7, 3)', min2(7, 3), 3);
check('min2(-1, -5)', min2(-1, -5), -5);
check('min2(4, 4)', min2(4, 4), 4);
check('min3(5, 9, -2)', min3(5, 9, -2), -2);
check('min3(1, 8, 3)', min3(1, 8, 3), 1);
check('min3(6, 2, 9)', min3(6, 2, 9), 2);
check('min3(-3, -3, 10)', min3(-3, -3, 10), -3);
check('обошлись без Math.min', (String(min2) + String(min3)).includes('Math.min'), false);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
