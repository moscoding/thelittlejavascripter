// Number Power · День 1 · 10 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Возвести число в степень — значит умножить его само на себя нужное число
// раз: 2 в степени 3 = 2 * 2 * 2 = 8. Напишите функцию pow(base, exponent)
// с циклом, не пользуясь Math.pow и оператором **. Показатель степени —
// целое число от 0 и больше; любое число в нулевой степени равно 1.
//   pow(2, 10) → 1024     pow(-3, 3) → -27     pow(7, 0) → 1
//
// Как проверить себя: запустите `node number-power.js` в терминале
// или скопируйте весь файл в консоль браузера.

function pow(base, exponent) {
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

check('pow(2, 10)', pow(2, 10), 1024);
check('pow(-3, 3)', pow(-3, 3), -27);
check('pow(7, 0)', pow(7, 0), 1);
check('pow(1.5, 2)', pow(1.5, 2), 2.25);
check('pow(10, 1)', pow(10, 1), 10);
check('pow(0, 5)', pow(0, 5), 0);
const source = String(pow);
check('обошлись без Math.pow и **', source.includes('Math.pow') || source.includes('**'), false);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
