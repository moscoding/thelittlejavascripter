// Make It Double · День 2 · 10 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию double(numbers), которая возвращает новый массив, где
// каждое число из numbers умножено на 2. Исходный массив менять нельзя.
//
//   double([1, 2, 3]) → [2, 4, 6]
//   double([])        → []
//
// Подсказка: это работа как раз для метода map.
//
// Как проверить себя: запустите `node make-it-double.js` в терминале
// или скопируйте весь файл в консоль браузера.

function double(numbers) {
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

check('double([1, 2, 3])', double([1, 2, 3]), [2, 4, 6]);
check('отрицательные и дробные', double([-5, 0, 2.5]), [-10, 0, 5]);
check('double([100])', double([100]), [200]);
check('пустой массив', double([]), []);
const original = [7, 8];
double(original);
check('исходный массив не изменился', original, [7, 8]);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
