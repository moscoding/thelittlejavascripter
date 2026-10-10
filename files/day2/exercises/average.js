// Average · День 2 · 15 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию average(numbers), которая возвращает среднее
// арифметическое чисел массива: сумму всех элементов, делённую на их количество.
// Для пустого массива верните 0 (на ноль делить не будем).
//
//   average([2, 4, 6]) → 4
//   average([1, 2])    → 1.5
//   average([])        → 0
//
// Подсказка: сумму удобно считать методом reduce.
//
// Как проверить себя: запустите `node average.js` в терминале
// или скопируйте весь файл в консоль браузера.

function average(numbers) {
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

check('average([2, 4, 6])', average([2, 4, 6]), 4);
check('average([1, 2])', average([1, 2]), 1.5);
check('average([10, 20, 30, 40])', average([10, 20, 30, 40]), 25);
check('average([-3, 3])', average([-3, 3]), 0);
check('один элемент', average([5]), 5);
check('пустой массив', average([]), 0);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
