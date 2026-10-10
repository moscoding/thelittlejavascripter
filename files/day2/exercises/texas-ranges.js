// Texas Ranges · День 2 · 20 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// В библиотеке Underscore есть удобная функция _.range. Напишите свою
// range(start, stop, step), которая возвращает массив чисел от start до stop
// (сам stop не включается) с шагом step. По умолчанию шаг равен 1, а
// с отрицательным шагом числа идут по убыванию.
//
//   range(0, 5)      → [0, 1, 2, 3, 4]
//   range(1, 10, 3)  → [1, 4, 7]
//   range(5, 0, -1)  → [5, 4, 3, 2, 1]
//   range(3, 3)      → []
//
// Как проверить себя: запустите `node texas-ranges.js` в терминале
// или скопируйте весь файл в консоль браузера.

function range(start, stop, step = 1) {
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

check('range(0, 5)', range(0, 5), [0, 1, 2, 3, 4]);
check('range(1, 10, 3)', range(1, 10, 3), [1, 4, 7]);
check('range(5, 0, -1)', range(5, 0, -1), [5, 4, 3, 2, 1]);
check('range(10, 0, -3)', range(10, 0, -3), [10, 7, 4, 1]);
check('range(3, 3) — пустой', range(3, 3), []);
check('range(0, -3) — с шагом 1 не дойти', range(0, -3), []);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
