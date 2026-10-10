// Absolute · День 1 · 5 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Модуль числа — это расстояние от него до нуля, поэтому он никогда не
// бывает отрицательным. Напишите функцию abs(x), которая возвращает модуль
// числа x, не пользуясь Math.abs. Хватит одного if (или тернарного
// оператора) и унарного минуса.
//   abs(-5) → 5     abs(3) → 3     abs(0) → 0
//
// Как проверить себя: запустите `node absolute.js` в терминале
// или скопируйте весь файл в консоль браузера.

function abs(x) {
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

check('abs(-5)', abs(-5), 5);
check('abs(3)', abs(3), 3);
check('abs(0)', abs(0), 0);
check('abs(-0.5)', abs(-0.5), 0.5);
check('abs(-1000)', abs(-1000), 1000);
check('обошлись без Math.abs', String(abs).includes('Math.abs'), false);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
